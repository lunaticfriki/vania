import { Item } from './item.type'

export const ItemDetail = ({ item }: { item: Item }) => {
  return (
    <article className="m-auto flex w-full flex-col items-center justify-center gap-2 p-4 md:w-[80%]">
      <p className="flex items-center justify-end gap-2 text-2xl">
        {item.title}
      </p>
      <span className="text-xl">{item.author}</span>
      <p className="uppercase">
        {item.publisher} - {item.topic} - {item.category}
      </p>
      <img
        src={item.cover}
        alt={item.title}
        className="mb-4 w-full rounded-md md:w-[500px]"
      />
      <p className="pt-4">{item.description}</p>
      <p className="w-full text-end">
        <span>{item.completed ? 'Completed' : 'Uncompleted'}</span>
      </p>
    </article>
  )
}
