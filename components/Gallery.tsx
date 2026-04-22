'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import type { CloudinaryProject } from '@/lib/cloudinary'

const INITIAL_COUNT = 6
const INITIAL_PHOTOS = 9

export default function Gallery() {
  const [projects, setProjects] = useState<CloudinaryProject[]>([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(INITIAL_COUNT)
  const [activeProject, setActiveProject] = useState<CloudinaryProject | null>(null)
  const [visiblePhotos, setVisiblePhotos] = useState(INITIAL_PHOTOS)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    fetch('/api/projects')
      .then(r => r.json())
      .then(data => { setProjects(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox) setLightbox(null)
        else if (activeProject) setActiveProject(null)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, activeProject])

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeProject])

  return (
    <section id="galerija" className="section-py bg-stone-50">
      <div className="wrapper">
        <p className="section-label mb-4">Projektai</p>
        <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl text-brand-900 leading-tight mb-4">
          Mūsų atlikti darbai
        </h2>
        <p className="font-sans text-brand-500 text-base mb-12 max-w-xl">
          Keletas atliktų darbų pavyzdžių. Spustelėkite ant projekto norėdami peržiūrėti nuotraukas.
        </p>

        {loading ? (
          <div className="text-brand-400 font-sans text-sm py-12 text-center">Kraunama...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, visible).map((project) => (
                <button
                  key={project.slug}
                  onClick={() => { setActiveProject(project); setVisiblePhotos(INITIAL_PHOTOS) }}
                  className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={project.cover.src}
                      alt={`${project.title} — ${project.location}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/30 transition-colors duration-300" />
                    {project.photos.length > 1 && (
                      <div className="absolute top-3 right-3 bg-brand-900/70 text-white text-xs font-sans px-2 py-1">
                        {project.photos.length} nuotr.
                      </div>
                    )}
                  </div>
                  <div className="pt-3 pb-1">
                    <p className="font-garamond text-lg text-brand-900 group-hover:text-gold-500 transition-colors duration-200">
                      {project.title}
                    </p>
                    <p className="font-sans text-sm text-brand-400 flex items-center gap-1 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
                        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {visible < projects.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisible(projects.length)}
                  className="inline-flex items-center gap-2 border border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white font-sans font-semibold text-sm px-8 py-4 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-900"
                >
                  Rodyti visus projektus ({projects.length})
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Project modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-brand-900/95 overflow-y-auto"
          onClick={() => { if (!lightbox) setActiveProject(null) }}
        >
          <div className="min-h-full flex flex-col">
            <div className="sticky top-0 z-10 bg-brand-900/95 backdrop-blur-sm border-b border-white/10 px-4 py-4 flex items-center justify-between">
              <div>
                <p className="font-garamond text-xl text-white">{activeProject.title}</p>
                <p className="font-sans text-sm text-white/50 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                  </svg>
                  {activeProject.location}
                </p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setActiveProject(null) }}
                className="text-white/60 hover:text-white transition-colors p-2 cursor-pointer focus:outline-none"
                aria-label="Uždaryti"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div
              className="p-4 md:p-6 columns-1 sm:columns-2 lg:columns-3 gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {activeProject.photos.slice(0, visiblePhotos).map((photo, i) => (
                <div key={i} className="break-inside-avoid mb-4">
                  <button
                    className="w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 group"
                    onClick={() => setLightbox(photo)}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto block transition-opacity duration-300 group-hover:opacity-90"
                      loading="lazy"
                      quality={80}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </button>
                </div>
              ))}
            </div>

            {visiblePhotos < activeProject.photos.length && (
              <div className="text-center pb-8">
                <button
                  onClick={(e) => { e.stopPropagation(); setVisiblePhotos(activeProject.photos.length) }}
                  className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-gold-500 hover:text-gold-500 font-sans text-sm font-semibold px-8 py-3 transition-colors duration-200 cursor-pointer focus:outline-none"
                >
                  Rodyti visas nuotraukas ({activeProject.photos.length})
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2 cursor-pointer focus:outline-none"
            aria-label="Uždaryti"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <Image
            src={lightbox.src}
            alt={lightbox.alt}
            width={1200}
            height={900}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
            quality={90}
          />
        </div>
      )}
    </section>
  )
}
