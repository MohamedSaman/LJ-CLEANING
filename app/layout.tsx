import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LJ Cleaning & Maintenance | Professional Cleaning Services',
  description: 'LJ Cleaning & Maintenance offers commercial cleaning, house cleaning, deep cleaning, Airbnb cleaning, high-pressure water blasting, window cleaning and more. Book my cleaning today.',
  keywords: 'cleaning services, commercial cleaning, house cleaning, deep cleaning, Airbnb cleaning, pressure washing, window cleaning, move-out cleaning, office cleaning',
  openGraph: {
    title: 'LJ Cleaning & Maintenance',
    description: 'Professional cleaning and maintenance services for homes and businesses. Book my cleaning today.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <head>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
