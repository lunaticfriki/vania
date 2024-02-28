import './globals.css'
import { incon, metadataContent } from '@/modules'
import type { ReactNode } from 'react'

export const metadata = metadataContent

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={incon.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
