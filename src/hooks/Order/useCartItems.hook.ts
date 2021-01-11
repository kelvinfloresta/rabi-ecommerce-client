import { useState } from 'react'

export function useCartItems() {
  const [items, setItems] = useState<{
    [productId: string]: number | undefined
  }>({})

  function increment(productId: string) {
    const oldQuantity = items[productId] ?? 0
    const newQuantity = oldQuantity + 1
    setItems(items => ({ ...items, [productId]: newQuantity }))
  }

  function decrement(productId: string) {
    const oldQuantity = items[productId] ?? 0
    const newQuantity = oldQuantity - 1
    if (newQuantity < 0) {
      return
    }
    setItems(items => ({ ...items, [productId]: newQuantity }))
  }

  return {
    increment,
    decrement,
    items,
  }
}
