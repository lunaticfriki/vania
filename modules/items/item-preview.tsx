import Link from 'next/link'
import { Item } from './item.type'

export const ItemPreview = ({ item }: { item: Item }) => {
  return (
    <Link href={`items/${item.slug}`}>
      <article className="group m-4 flex h-[500px] w-[300px] flex-col items-start justify-start transition-all">
        <img
          src={item.cover}
          alt={item.title}
          className="mb-4 h-[400px] w-[300px] rounded-md hover:grayscale group-hover:filter"
        />
        <p className="pt-2 text-gray-300">{item.title}</p>
      </article>
    </Link>
  )
}
