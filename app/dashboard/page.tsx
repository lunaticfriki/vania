import { ItemPreview } from '@/modules'
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
    <div className="">
      {items?.length ? (
        <>
          <h3 className="p-4 text-center text-2xl text-gray-300">Last items</h3>
          <div className="flex flex-wrap items-center justify-center">
            {items?.map((item) => <ItemPreview item={item} key={item.id} />)}
          </div>
        </>
      ) : (
        <div className="grid h-full place-content-center place-items-center">
          <p className="p-4 text-center text-xl">Nothing found yet</p>
        </div>
      )}
    </div>
  )
}
