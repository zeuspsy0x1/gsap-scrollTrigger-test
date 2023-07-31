import './globals.css'
import type { Metadata } from 'next'
/* import { Inter } from 'next/font/google' */
import localFont from 'next/font/local'


// Font files can be colocated inside of `app`
const dexterousFont = localFont({
  src: './righteousFont.ttf',
  display: 'swap',
})

/* const inter = Inter({ subsets: ['latin'] }) */

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dexterousFont.className}>{children}</body>
    </html>
  )
}
