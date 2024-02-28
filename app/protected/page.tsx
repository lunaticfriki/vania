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
    .eq('owner', user.id)
    .limit(10)

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <nav className="w-full flex justify-end items-center border-b border-b-foreground/10 h-16 p-4">
          <AuthButton />
        </nav>
        <h3 className="text-gray-300 text-center p-4 text-2xl">Last items</h3>
        <div className="flex items-center justify-center flex-wrap">
          {items?.map((item) => (
            <article key={item.id} className="w-[300px] h-[400px] m-4 p-4">
              <img
                src={item.cover}
                alt={item.title}
                className="h-full w-full rounded"
              />
              <p className="pt-2">{item.title}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
