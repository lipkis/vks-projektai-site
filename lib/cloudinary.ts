import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export type CloudinaryPhoto = {
  src: string
  alt: string
  width: number
  height: number
}

export type CloudinaryProject = {
  slug: string
  title: string
  location: string
  cover: CloudinaryPhoto
  photos: CloudinaryPhoto[]
}

/**
 * Folder naming convention:
 * vks-projektai/01 Title -- Location
 * e.g. "vks-projektai/01 Vonios įrengimas -- Kaunas"
 *
 * Photo naming convention:
 * 01_cover.jpg  ← first photo = cover
 * anything else ← rest of photos
 */
function parseFolder(folderPath: string): { title: string; location: string; order: number } {
  const name = folderPath.replace('vks-projektai/', '')
  // Extract order number prefix (e.g. "01 " or "01")
  const orderMatch = name.match(/^(\d+)\s+/)
  const order = orderMatch ? parseInt(orderMatch[1]) : 99
  const nameWithoutOrder = orderMatch ? name.slice(orderMatch[0].length) : name
  const parts = nameWithoutOrder.split(' -- ')
  return {
    title: parts[0]?.trim() || nameWithoutOrder,
    location: parts[1]?.trim() || '',
    order,
  }
}

export async function getProjects(): Promise<CloudinaryProject[]> {
  const { folders } = await cloudinary.api.sub_folders('vks-projektai')

  const projects = await Promise.all(
    folders.map(async (folder: { name: string; path: string }) => {
      const { resources } = await cloudinary.api.resources_by_asset_folder(
        folder.path,
        { max_results: 100 }
      )

      const { title, location, order } = parseFolder(folder.path)

      // Sort photos: 01_ prefix first, rest in any order
      const sorted = [...resources].sort((a: { public_id: string }, b: { public_id: string }) => {
        const aName = a.public_id.split('/').pop() || ''
        const bName = b.public_id.split('/').pop() || ''
        const aIsFirst = /^01[_\-]/.test(aName)
        const bIsFirst = /^01[_\-]/.test(bName)
        if (aIsFirst && !bIsFirst) return -1
        if (!aIsFirst && bIsFirst) return 1
        return aName.localeCompare(bName)
      })

      const photos: CloudinaryPhoto[] = sorted.map((r: {
        secure_url: string
        width: number
        height: number
      }) => ({
        src: r.secure_url,
        alt: `${title} — ${location}`,
        width: r.width,
        height: r.height,
      }))

      return { slug: folder.name, title, location, order, cover: photos[0], photos }
    })
  )

  return projects
    .filter((p) => p.photos.length > 0)
    .sort((a, b) => a.order - b.order)
}
