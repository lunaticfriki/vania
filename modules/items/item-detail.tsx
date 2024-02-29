import Image from 'next/image'
import { Item } from './item.type'

export const ItemDetail = ({ item }: { item: Item }) => {
  return (
    <article className="w-full md:w-[80%] p-4 flex justify-center items-center flex-col gap-2 m-auto">
      <p className="flex items-center justify-end gap-2 text-2xl">
        {item.title}
      </p>
      <span className="text-xl">{item.author}</span>
      <p className="uppercase">
        {item.publisher} - {item.topic} - {item.category}
      </p>
      <Image
        src={item.cover}
        alt={item.title}
        className="rounded-md mb-4"
        height={600}
        width={500}
      />
      <p className="pt-4">{item.description}</p>
      <p className="text-end w-full">
        <span>{item.completed ? 'Completed' : 'Uncompleted'}</span>
      </p>
    </article>
  )
}
