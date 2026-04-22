import { NextResponse } from 'next/server'
import { getProjects } from '@/lib/cloudinary'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const projects = await getProjects()
    return NextResponse.json(projects)
  } catch (error) {
    console.error('Cloudinary error:', error)
    return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 })
  }
}
