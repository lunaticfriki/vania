import { Navigation } from '@/modules'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex h-full w-full items-center justify-between border-b border-b-foreground/10 p-4">
      <Link href="/">
        <h1 className="text-2xl">Vania</h1>
      </Link>
      <Navigation />
    </header>
  )
}
