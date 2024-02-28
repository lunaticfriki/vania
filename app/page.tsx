import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import AuthButton from '../components/AuthButton'

export default async function Index() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full grid border-b border-b-foreground/10 h-16">
        <AuthButton />
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">home</main>
      </div>
    </div>
  )
}
