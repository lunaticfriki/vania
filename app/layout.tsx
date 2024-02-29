import './globals.css'
import { Footer, Header, incon, metadataContent } from '@/modules'
import type { ReactNode } from 'react'

export const metadata = metadataContent

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={incon.className}>
      <body className="grid min-h-screen w-full grid-rows-[4rem,1fr,auto] bg-background text-foreground">
        <Header />
        <main className="flex h-full flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
