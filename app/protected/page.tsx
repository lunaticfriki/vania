import { AuthButton } from '@/modules'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function ProtectedPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  const { data: items } = await supabase
    .from('items')
    .select()
    .eq('owner', user!.id)

  console.log(items)

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <nav className="w-full flex justify-end items-center border-b border-b-foreground/10 h-16 p-4">
          <AuthButton />
        </nav>
      </div>
    </div>
  )
}
