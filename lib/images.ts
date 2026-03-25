/**
 * Image configuration for VKS Projektai.
 * All images are served from /public/images/projects/
 */

export const heroImage = {
  src: '/images/projects/hero.jpg',
  alt: 'Profesionalus vidaus įrengimas Kaune',
}

export type GalleryImage = {
  src: string
  alt: string
  label: string
}

export type GalleryCategory = {
  id: string
  label: string
  images: GalleryImage[]
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'vonios',
    label: 'Vonios kambariai',
    images: [
      { src: '/images/projects/vonios-irengimas-modernu-05.jpg', alt: 'Moderni vonia su mikrocementu', label: 'Moderni vonia' },
      { src: '/images/projects/vonios-irengimas-vonia-04.jpg', alt: 'Vonia su vonia – pilnas įrengimas', label: 'Vonios remontas' },
      { src: '/images/projects/vonios-irengimas-platus-07.jpg', alt: 'Erdvi vonios patalpa', label: 'Erdvi vonia' },
      { src: '/images/projects/vonios-dusas-modernu-06.jpg', alt: 'Moderni dušo zona', label: 'Dušo zona' },
      { src: '/images/projects/vonios-wc-modernu-02.jpg', alt: 'Modernus vonios kambarys su WC', label: 'Vonia su WC' },
      { src: '/images/projects/vonios-veidrodis-led-01.jpg', alt: 'Vonios kambarys su LED veidrodžiu', label: 'LED apšvietimas' },
      { src: '/images/projects/modernus-vonios-irengimas-led-mikrocementas-01.jpg', alt: 'Vonios įrengimas su LED ir mikrocementu', label: 'LED + mikrocementas' },
      { src: '/images/projects/modernus-vonios-irengimas-led-mikrocementas-02.jpg', alt: 'Moderni vonia su mikrocementu', label: 'Mikrocementas' },
      { src: '/images/projects/modernus-vonios-irengimas-led-mikrocementas-03.jpg', alt: 'LED apšvietimas vonios kambaryje', label: 'LED apšvietimas' },
      { src: '/images/projects/dusas-marmuro-plyteles-irengimas.jpg', alt: 'Dušas su marmuro imitacijos plytelėmis', label: 'Marmuro plytelės' },
      { src: '/images/projects/duso-irengimas-plyteles-01.jpg', alt: 'Dušo įrengimas – plytelės', label: 'Dušo plytelės' },
      { src: '/images/projects/duso-irengimas-plyteles-02.jpg', alt: 'Dušo kabina su plytelėmis', label: 'Dušo kabina' },
      { src: '/images/projects/plyteles-dusas-apsvietimas-04.jpg', alt: 'Dušas su integruotu apšvietimu', label: 'Dušas su apšvietimu' },
      { src: '/images/projects/plyteles-dusas-siaura-02.jpg', alt: 'Siaura dušo zona su plytelėmis', label: 'Dušo zona' },
      { src: '/images/projects/plyteles-vonios-siena-eglute-01.jpg', alt: 'Vonios siena su plytelėmis eglutės raštu', label: 'Eglutės raštas' },
    ],
  },
  {
    id: 'grindys',
    label: 'Grindų klojimas',
    images: [
      { src: '/images/projects/grindys-eglute-platus-01.jpg', alt: 'Platus eglutės rašto grindys', label: 'Eglutės raštas' },
      { src: '/images/projects/grindys-eglute-durys-02.jpg', alt: 'Eglutės rašto grindys prie durų', label: 'Eglutė prie durų' },
      { src: '/images/projects/grindys-eglute-kambarys-langas-03.jpg', alt: 'Eglutės grindys kambaryje su langu', label: 'Šviesus kambarys' },
      { src: '/images/projects/grindys-eglute-kambarys-sviesus-05.jpg', alt: 'Šviesios eglutės grindys kambaryje', label: 'Šviesios grindys' },
      { src: '/images/projects/grindys-eglute-erdve-plati-06.jpg', alt: 'Eglutės grindys erdvioje patalpoje', label: 'Erdvi patalpa' },
      { src: '/images/projects/grindys-plyteles-medzio-imitacija-01.jpg', alt: 'Grindų plytelės medžio imitacija', label: 'Medžio imitacija' },
      { src: '/images/projects/didelio-formato-plyteles-grindys-svetaine.jpg', alt: 'Didelio formato plytelės svetainėje', label: 'Didelio formato' },
      { src: '/images/projects/plyteliu-raste-grindys-eglute-stilius-01.jpg', alt: 'Plytelių rašto grindys eglutės stilius', label: 'Rašto grindys' },
      { src: '/images/projects/plyteliu-raste-grindys-eglute-stilius-02.jpg', alt: 'Plytelių eglutės rašto stilius', label: 'Eglutės stilius' },
      { src: '/images/projects/terasos-plyteles-didelio-formato-01.jpg', alt: 'Terasos didelio formato plytelės', label: 'Terasos plytelės' },
    ],
  },
  {
    id: 'interjeras',
    label: 'Interjeras ir apdaila',
    images: [
      { src: '/images/projects/interjeras-premium-01.jpg', alt: 'Premium klasės interjero apdaila', label: 'Premium interjeras' },
      { src: '/images/projects/interjeras-sviesus-kambarys-07.jpg', alt: 'Šviesus moderni interjeras', label: 'Šviesus kambarys' },
      { src: '/images/projects/interjeras-spinta-veidrodis-eglute-02.jpg', alt: 'Interjeras su spinta ir veidrodžiu', label: 'Spinta ir veidrodis' },
      { src: '/images/projects/virtuve-modernu-irengimas-01.jpg', alt: 'Modernios virtuvės įrengimas', label: 'Virtuvė' },
      { src: '/images/projects/dekoratyvine_mikrocemento_siena_led_apvietimas.JPG', alt: 'Dekoratyvinė mikrocemento siena su LED apšvietimu', label: 'Mikrocementas + LED' },
      { src: '/images/projects/mikrocemento_3d_reljefas_su_integruotu_apvietimu.JPG', alt: 'Mikrocemento 3D reljefas su integruotu apšvietimu', label: '3D reljefas' },
      { src: '/images/projects/plyteles-siena-po-stogu-03.jpg', alt: 'Plytelių siena po stogu', label: 'Sienos plytelės' },
      { src: '/images/projects/komercinis-interjeras-apdaila-barbershop.jpg', alt: 'Komercinis interjeras – kirpykla', label: 'Komercinis objektas' },
    ],
  },
]

// Flat list of all images (all categories combined)
export const allGalleryImages: GalleryImage[] = galleryCategories.flatMap((c) => c.images)
