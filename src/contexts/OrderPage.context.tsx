import React, { ReactNode, useEffect } from 'react'
import { useCartItems } from 'src/hooks/Order/useCartItems.hook'
import { useGroupedProductsByCategory } from 'src/hooks/Product.hook'
import { useOpen } from 'src/hooks/useOpen'

import { useOrderList } from '../hooks/Order.hook'

interface IOrderPageContext {
  listOrder: ReturnType<typeof useOrderList>
  groupedProducts: ReturnType<typeof useGroupedProductsByCategory>
  drawer: ReturnType<typeof useOpen>
  cart: ReturnType<typeof useCartItems>
}

export const OrderPageContext = React.createContext<IOrderPageContext>(
  {} as any,
)

export function OrderPageProvider({ children }: { children: ReactNode }) {
  const listOrder = useOrderList()
  const drawer = useOpen()
  const groupedProducts = useGroupedProductsByCategory()
  const cart = useCartItems()

  useEffect(() => {
    if (!drawer.isOpen) {
      return
    }
    const sub = groupedProducts.list().subscribe()
    return () => sub.unsubscribe()
  }, [drawer.isOpen])

  return (
    <OrderPageContext.Provider
      value={{
        listOrder,
        groupedProducts,
        drawer,
        cart,
      }}>
      {children}
    </OrderPageContext.Provider>
  )
}
