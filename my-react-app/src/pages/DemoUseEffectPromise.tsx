import { useEffect, useState } from "react"
import { wait } from "../tools/wait"

export interface Item {
  id: string
  name: string
}

const testItems: Item[] = [
  {
    id: '1',
    name: '1 item',
  },
  {
    id: '2',
    name: '2 item',
  },
  {
    id: '3',
    name: '3 item',
  }
]

const loadItems = async (): Promise<Item[]> => {
  await wait(5000)
  return testItems
}

export const DemoUseEffectPromise = () => {
  const [itemList, setItemList] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    let terminated = false
    setIsLoading(true)
    loadItems().then((newItems) => {
      if (terminated) {
        console.log('will not set data because component was terminated')
        return
      }
      console.log('ItemList items arrived...start setting', newItems)
      setItemList(newItems)
      setIsLoading(false)
    })
    return () => {
      console.log('DemoUseEffectPromise terminated')
      terminated = true
    }
  }, [])
  return (
    <div>
      { isLoading && (<p>loading...</p>)}
      <h2>{`You have ${itemList.length} items`}</h2>
      <ul>
        {itemList.map((item) => (<li key={item.id}>{item.name}</li>))}
      </ul>
    </div>
  )
}