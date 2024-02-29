import Image from 'next/image'
import Link from 'next/link'
import { Item } from './item.type'

export const ItemPreview = ({ item }: { item: Item }) => {
  return (
    <Link href={`items/${item.slug}`}>
      <article className="p-4 w-[300px] h-[500px] m-4 flex flex-col justify-center items-center">
        <Image
          src={item.cover}
          alt={item.title}
          className="rounded-md mb-4"
          height={400}
          width={300}
        />
        <p className="pt-2 text-gray-300">{item.title}</p>
      </article>
    </Link>
  )
}
