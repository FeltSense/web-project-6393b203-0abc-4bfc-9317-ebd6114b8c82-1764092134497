import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const bodyFont = Inter({ 
  subsets: ['latin'],
  variable: '--font-body'
})

const headingFont = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-heading'
})

export const metadata = {
  title: 'Hot or Not - Instant Social Discovery',
  description: 'Bold social discovery platform for instant connections and playful interactions'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
