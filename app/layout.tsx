import type { Metadata } from 'next'
import { Inter, EB_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VKS Projektai – Vidaus įrengimas Kaune nuo A iki Z',
  description:
    'Vidaus apdailos darbai Kaune ir Kauno rajone. Pilnas vidaus įrengimas nuo A iki Z – plytelių klijavimas, gipskartonis, glaistymas, grindys, vonios remontas.',
  keywords:
    'vidaus įrengimas, apdailos darbai, Kaunas, plytelių klijavimas, gipskartonis, vonios remontas, grindų klojimas',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt" className={`${inter.variable} ${garamond.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
