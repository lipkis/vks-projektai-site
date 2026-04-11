/**
 * Image configuration for VKS Projektai.
 * All images are served from /public/images/projects/
 */

export const heroImage = {
  src: '/images/projects/hero.jpg',
  alt: 'Profesionalus vidaus įrengimas Kaune',
}

export type ProjectPhoto = {
  src: string
  alt: string
}

export type Project = {
  slug: string
  title: string
  location: string
  cover: string
  photos: ProjectPhoto[]
}

export const projects: Project[] = [
  {
    slug: 'paneriu-g-kaunas',
    title: 'Buto renovacija',
    location: 'Panerių g., Kaunas',
    cover: '/images/projects/paneriu-g-kaunas/IMG_3979.JPG',
    photos: [
      { src: '/images/projects/paneriu-g-kaunas/IMG_3979.JPG', alt: 'Buto renovacija Panerių g. Kaunas' },
      { src: '/images/projects/paneriu-g-kaunas/IMG_4023.JPG', alt: 'Buto renovacija Panerių g. Kaunas' },
      { src: '/images/projects/paneriu-g-kaunas/IMG_4024.JPG', alt: 'Buto renovacija Panerių g. Kaunas' },
      { src: '/images/projects/paneriu-g-kaunas/IMG_4032.JPG', alt: 'Buto renovacija Panerių g. Kaunas' },
      { src: '/images/projects/paneriu-g-kaunas/IMG_4033.JPG', alt: 'Buto renovacija Panerių g. Kaunas' },
      { src: '/images/projects/paneriu-g-kaunas/IMG_4042.JPG', alt: 'Buto renovacija Panerių g. Kaunas' },
      { src: '/images/projects/paneriu-g-kaunas/IMG_4043.JPG', alt: 'Buto renovacija Panerių g. Kaunas' },
    ],
  },
  {
    slug: 'radvilenai-kaunas',
    title: 'Buto renovacija',
    location: 'Radvilėnų pl., Kaunas',
    cover: '/images/projects/radvilenai-kaunas/image00013.jpeg',
    photos: [
      { src: '/images/projects/radvilenai-kaunas/273539758_312244597635058_6866637261340616827_n.jpg', alt: 'Buto renovacija Radvilėnų pl. Kaunas' },
      { src: '/images/projects/radvilenai-kaunas/image00013.jpeg', alt: 'Buto renovacija Radvilėnų pl. Kaunas' },
      { src: '/images/projects/radvilenai-kaunas/image00014.jpeg', alt: 'Buto renovacija Radvilėnų pl. Kaunas' },
      { src: '/images/projects/radvilenai-kaunas/image00015.jpeg', alt: 'Buto renovacija Radvilėnų pl. Kaunas' },
      { src: '/images/projects/radvilenai-kaunas/image00016.jpeg', alt: 'Buto renovacija Radvilėnų pl. Kaunas' },
      { src: '/images/projects/radvilenai-kaunas/image00017.jpeg', alt: 'Buto renovacija Radvilėnų pl. Kaunas' },
      { src: '/images/projects/radvilenai-kaunas/image00018.jpeg', alt: 'Buto renovacija Radvilėnų pl. Kaunas' },
      { src: '/images/projects/radvilenai-kaunas/image00019.jpeg', alt: 'Buto renovacija Radvilėnų pl. Kaunas' },
      { src: '/images/projects/radvilenai-kaunas/image00020.jpeg', alt: 'Buto renovacija Radvilėnų pl. Kaunas' },
    ],
  },
  {
    slug: 'nemunaiciai',
    title: 'Namo renovacija',
    location: 'Nemunaičiai',
    cover: '/images/projects/nemunaiciai/image00001.jpeg',
    photos: [
      { src: '/images/projects/nemunaiciai/image00001.jpeg', alt: 'Namo renovacija Nemunaičiai' },
      { src: '/images/projects/nemunaiciai/image00002.jpeg', alt: 'Namo renovacija Nemunaičiai' },
      { src: '/images/projects/nemunaiciai/image00003.jpeg', alt: 'Namo renovacija Nemunaičiai' },
      { src: '/images/projects/nemunaiciai/image00004.jpeg', alt: 'Namo renovacija Nemunaičiai' },
      { src: '/images/projects/nemunaiciai/image00005.jpeg', alt: 'Namo renovacija Nemunaičiai' },
      { src: '/images/projects/nemunaiciai/image00006.jpeg', alt: 'Namo renovacija Nemunaičiai' },
      { src: '/images/projects/nemunaiciai/image00007.jpeg', alt: 'Namo renovacija Nemunaičiai' },
      { src: '/images/projects/nemunaiciai/image00008.jpeg', alt: 'Namo renovacija Nemunaičiai' },
      { src: '/images/projects/nemunaiciai/image00009.jpeg', alt: 'Namo renovacija Nemunaičiai' },
      { src: '/images/projects/nemunaiciai/image00010.jpeg', alt: 'Namo renovacija Nemunaičiai' },
      { src: '/images/projects/nemunaiciai/image00011.jpeg', alt: 'Namo renovacija Nemunaičiai' },
      { src: '/images/projects/nemunaiciai/image00012.jpeg', alt: 'Namo renovacija Nemunaičiai' },
    ],
  },
  {
    slug: 'smiltynai',
    title: 'Buto renovacija',
    location: 'Smiltynai',
    cover: '/images/projects/smiltynai/image00001.jpeg',
    photos: [
      { src: '/images/projects/smiltynai/image00001.jpeg', alt: 'Buto renovacija Smiltynai' },
      { src: '/images/projects/smiltynai/image00002.jpeg', alt: 'Buto renovacija Smiltynai' },
      { src: '/images/projects/smiltynai/image00003.jpeg', alt: 'Buto renovacija Smiltynai' },
      { src: '/images/projects/smiltynai/image00004.jpeg', alt: 'Buto renovacija Smiltynai' },
      { src: '/images/projects/smiltynai/image00005.jpeg', alt: 'Buto renovacija Smiltynai' },
      { src: '/images/projects/smiltynai/image00006.jpeg', alt: 'Buto renovacija Smiltynai' },
      { src: '/images/projects/smiltynai/image00007.jpeg', alt: 'Buto renovacija Smiltynai' },
      { src: '/images/projects/smiltynai/image00008.jpeg', alt: 'Buto renovacija Smiltynai' },
      { src: '/images/projects/smiltynai/image00009.jpeg', alt: 'Buto renovacija Smiltynai' },
    ],
  },
  {
    slug: 'vonios-kampiskiai',
    title: 'Vonios renovacija',
    location: 'Kampiškiai',
    cover: '/images/projects/vonios-kampiskiai/image00023.jpeg',
    photos: [
      { src: '/images/projects/vonios-kampiskiai/image00023.jpeg', alt: 'Vonios renovacija Kampiškiai' },
      { src: '/images/projects/vonios-kampiskiai/image00024.jpeg', alt: 'Vonios renovacija Kampiškiai' },
      { src: '/images/projects/vonios-kampiskiai/IMG_0186.PNG', alt: 'Vonios renovacija Kampiškiai' },
      { src: '/images/projects/vonios-kampiskiai/IMG_0188.PNG', alt: 'Vonios renovacija Kampiškiai' },
    ],
  },
  {
    slug: 'vonios-vaisiu-g',
    title: 'Vonios renovacija',
    location: 'Vaisių g., Kaunas',
    cover: '/images/projects/vonios-vaisiu-g/IMG_2613.JPG',
    photos: [
      { src: '/images/projects/vonios-vaisiu-g/IMG_2613.JPG', alt: 'Vonios renovacija Vaisių g. Kaunas' },
      { src: '/images/projects/vonios-vaisiu-g/IMG_2616.JPG', alt: 'Vonios renovacija Vaisių g. Kaunas' },
      { src: '/images/projects/vonios-vaisiu-g/IMG_2617.JPG', alt: 'Vonios renovacija Vaisių g. Kaunas' },
      { src: '/images/projects/vonios-vaisiu-g/IMG_2618.JPG', alt: 'Vonios renovacija Vaisių g. Kaunas' },
    ],
  },
  {
    slug: 'sandeliavimas',
    title: 'Sandėliavimo patalpos',
    location: 'Kaunas',
    cover: '/images/projects/sandeliavimas/IMG_1760.JPG',
    photos: [
      { src: '/images/projects/sandeliavimas/IMG_1760.JPG', alt: 'Sandėliavimo patalpos įrengimas Kaunas' },
      { src: '/images/projects/sandeliavimas/IMG_1761.JPG', alt: 'Sandėliavimo patalpos įrengimas Kaunas' },
      { src: '/images/projects/sandeliavimas/IMG_1763.JPG', alt: 'Sandėliavimo patalpos įrengimas Kaunas' },
      { src: '/images/projects/sandeliavimas/IMG_1764.JPG', alt: 'Sandėliavimo patalpos įrengimas Kaunas' },
      { src: '/images/projects/sandeliavimas/IMG_1767.JPG', alt: 'Sandėliavimo patalpos įrengimas Kaunas' },
      { src: '/images/projects/sandeliavimas/IMG_1768.JPG', alt: 'Sandėliavimo patalpos įrengimas Kaunas' },
      { src: '/images/projects/sandeliavimas/IMG_1770.JPG', alt: 'Sandėliavimo patalpos įrengimas Kaunas' },
    ],
  },
  {
    slug: 'kirpykla',
    title: 'Kirpyklos įrengimas',
    location: 'Kaunas',
    cover: '/images/projects/kirpykla/IMG_0208.JPG',
    photos: [
      { src: '/images/projects/kirpykla/IMG_0208.JPG', alt: 'Kirpyklos įrengimas Kaunas' },
      { src: '/images/projects/kirpykla/IMG_9051.JPG', alt: 'Kirpyklos įrengimas Kaunas' },
    ],
  },
  {
    slug: 'ofisas',
    title: 'Ofiso įrengimas',
    location: 'Kaunas',
    cover: '/images/projects/ofisas/IMG_1641.JPG',
    photos: [
      { src: '/images/projects/ofisas/IMG_1641.JPG', alt: 'Ofiso įrengimas Kaunas' },
    ],
  },
  {
    slug: 'parduotuve',
    title: 'Parduotuvės įrengimas',
    location: 'Kaunas',
    cover: '/images/projects/parduotuve/IMG_8602.JPG',
    photos: [
      { src: '/images/projects/parduotuve/IMG_8602.JPG', alt: 'Parduotuvės įrengimas Kaunas' },
    ],
  },
  {
    slug: 'vonios-darbai',
    title: 'Vonios darbų kolekcija',
    location: 'Kaunas ir Kauno rajonas',
    cover: '/images/projects/vonios-darbai/IMG_3855.JPG',
    photos: [
      'IMG_3855.JPG', 'IMG_3856.JPG', 'IMG_3857.JPG', 'IMG_5855.JPG', 'IMG_7020.JPG',
      'IMG_8029.JPG', 'IMG_8030.JPG', 'IMG_8031.JPG', 'IMG_8032.JPG', 'IMG_8039.JPG',
      'IMG_8040.JPG', 'IMG_8191.JPG', 'IMG_8651.JPG', 'IMG_8652.JPG', 'IMG_8653.JPG',
      'IMG_8654.JPG', 'IMG_8661.JPG', 'IMG_8662.JPG', 'IMG_8664.JPG', 'IMG_9429.JPG',
      'IMG_9568.JPG', 'IMG_9867.JPG', 'IMG_9869.JPG', 'IMG_9870.JPG', 'IMG_9888.JPG',
      'JJCS4902.JPG', 'photo_2022-04-16_16-07-05.jpg', 'photo_2022-04-16_16-07-18.jpg',
      'photo_2022-04-16_16-07-21.jpg', 'photo_2022-04-16_16-07-25.jpg',
      'photo_2022-04-16_16-07-51.jpg', 'photo_2022-04-16_16-07-55.jpg',
      'photo_2022-04-16_16-07-57.jpg', 'photo_2022-04-16_18-36-10.jpg',
      'photo_2022-04-16_18-36-15.jpg', 'photo_2022-04-16_18-36-20.jpg',
      'photo_2022-04-16_18-36-27.jpg', 'photo_2022-04-16_18-36-32.jpg',
      'photo_2022-04-16_18-36-36.jpg', 'photo_2022-04-16_18-36-39.jpg',
      'photo_2022-04-16_18-36-44.jpg', 'photo_2022-04-16_18-36-57.jpg',
    ].map(f => ({ src: `/images/projects/vonios-darbai/${f}`, alt: 'Vonios įrengimas plytelių klijavimas Kaunas' })),
  },
]
