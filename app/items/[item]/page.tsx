import { BackButton, ItemDetail, Navigation } from '@/modules'
import { Item } from '@/modules/items/item.type'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function ItemPage({
  params,
}: Readonly<{
  params: { item: string }
}>) {
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
    .filter('slug', 'eq', params.item)

  const listItems = items as Item[]

  return (
    <div className="m-auto grid h-full w-[80%] place-content-center place-items-center">
      {listItems.length ? (
        <>
          <ItemDetail item={listItems[0]} />
          <div className="flex w-full items-center justify-end p-4">
            <BackButton>Back</BackButton>
          </div>
        </>
      ) : (
        <div className="grid place-items-center gap-2">
          <p className="text-2xl">Item not found</p>
          <BackButton>Back</BackButton>
        </div>
      )}
    </div>
  )
}
