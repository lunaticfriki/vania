import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="grid h-full w-full place-content-center place-items-center p-4">
      <Link
        href="http://www.github.com/lunaticfriki"
        target="_blank"
        className="text-gray-300"
      >
        @lunaticfriki, <span>{new Date().getFullYear()}</span>
      </Link>
    </footer>
  )
}
