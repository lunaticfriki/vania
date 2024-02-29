import { BackButton } from '@/modules'

export default function NotFound() {
  return (
    <div className="grid h-full place-content-center place-items-center">
      <h3 className="p-4 text-2xl">Page not found</h3>
      <BackButton>Back</BackButton>
    </div>
  )
}
