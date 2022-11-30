import { useState } from "react"

export interface Item {
  id: string
  name: string
}

export const DemoUseEffectPromise = () => {
  const [itemList, setItemList] = useState<Item[]>([])
  return (
    <div>
      <h2>{`You have ${itemList.length} items`}</h2>
      <ul>
        {itemList.map((item) => (<li key={item.id}>{item.name}</li>))}
      </ul>
    </div>
  )
}