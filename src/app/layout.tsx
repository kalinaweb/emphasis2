import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ударения для ЕГЭ',
  description: 'Игра для заучивания правильного ударения в словах',  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>      
          <link rel="shortcut icon" href="/images/favicon.ico" />            
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
