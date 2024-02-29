'use client'
import { useRouter } from 'next/navigation'

export function BackButton({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string
}>) {
  const router = useRouter()

  return (
    <button className="p-4 rounded-md" onClick={() => router.back()}>
      {children}
    </button>
  )
}

export default BackButton
