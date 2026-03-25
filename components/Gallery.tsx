'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { galleryCategories, allGalleryImages, type GalleryImage } from '@/lib/images'

const ALL_TAB = { id: 'visi', label: 'Visi darbai' }

// 9 hand-picked preview images shown on the page
const PREVIEW_IMAGES = allGalleryImages.slice(0, 9)

function ModalGallery({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('visi')
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') lightbox ? setLightbox(null) : onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, onClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const visibleImages =
    activeTab === 'visi'
      ? allGalleryImages
      : galleryCategories.find((c) => c.id === activeTab)?.images ?? []

  return (
    <div className="fixed inset-0 z-50 bg-brand-900/95 flex flex-col" role="dialog" aria-modal="true" aria-label="Projektų galerija">
      {/* Modal header */}
      <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div>
          <p className="text-white font-garamond text-xl font-medium">Projektų galerija</p>
          <p className="text-white/50 text-xs font-sans mt-0.5">{allGalleryImages.length} nuotraukų</p>
        </div>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 p-1"
          aria-label="Uždaryti galeriją"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex-shrink-0 flex gap-2 px-6 py-3 border-b border-white/10 overflow-x-auto" role="tablist">
        {[ALL_TAB, ...galleryCategories].map((tab) => {
          const count =
            tab.id === 'visi'
              ? allGalleryImages.length
              : galleryCategories.find((c) => c.id === tab.id)?.images.length ?? 0
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium font-sans transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                isActive
                  ? 'bg-gold-500 text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
              <span className={`text-xs ${isActive ? 'text-white/80' : 'text-white/40'}`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Scrollable image grid */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {visibleImages.map((img, i) => (
            <div
              key={`${activeTab}-${i}`}
              className="break-inside-avoid overflow-hidden group cursor-pointer relative"
              onClick={() => setLightbox(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                quality={80}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="absolute inset-0 z-10 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white cursor-pointer focus:outline-none"
            onClick={() => setLightbox(null)}
            aria-label="Uždaryti"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <Image
            src={lightbox.src}
            alt={lightbox.alt}
            width={1200}
            height={900}
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            quality={90}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-sans">
            {lightbox.label}
          </p>
        </div>
      )}
    </div>
  )
}

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="galerija" className="section-py bg-white">
      <div className="wrapper">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="section-label mb-4">Mūsų darbai</p>
            <h2 className="font-garamond text-3xl sm:text-4xl md:text-5xl text-brand-900 leading-tight">
              Projektų galerija
            </h2>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex-shrink-0 inline-flex items-center gap-2 border border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white font-sans text-sm font-semibold px-6 py-3 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            Visos nuotraukos ({allGalleryImages.length})
          </button>
        </div>

        {/* 3×3 preview grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {PREVIEW_IMAGES.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-stone-100 aspect-[4/3] group cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Open gallery CTA below grid */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-900 font-sans text-sm font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:underline"
          >
            Rodyti visas {allGalleryImages.length} nuotraukas
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && <ModalGallery onClose={() => setModalOpen(false)} />}
    </section>
  )
}
