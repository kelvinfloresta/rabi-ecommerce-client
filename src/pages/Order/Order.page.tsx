import React, { useContext, useEffect } from 'react'
import { NewOrderDrawer } from 'src/components/Drawer/NewOrderDrawer'
import { Message } from 'src/components/Message/Message'
import { Page } from 'src/components/Page'
import { OrderTable } from 'src/components/Table/OrderTable.component'
import { ToolbarButton } from 'src/components/Toolbar'
import { OrderPageContext } from 'src/contexts/OrderPage.context'
import { useOrderCreate } from 'src/hooks/Order.hook'
import { parseCartItemsToOrderItems } from 'src/utils/Order.util'

export default function Order() {
  const { create } = useOrderCreate()
  const { listOrder, drawer, groupedProducts, cart } = useContext(
    OrderPageContext,
  )

  function onCreate() {
    create({
      userId: null,
      items: parseCartItemsToOrderItems(cart.items),
    }).subscribe(
      () => Message.success.create('pedido'),
      () => Message.error.create('pedido'),
    )
  }

  useEffect(() => {
    const subscription = listOrder.list().subscribe()
    return () => subscription.unsubscribe()
  }, [])

  return (
    <Page
      title="Pedidos"
      extra={<ToolbarButton onClick={drawer.open}>Novo pedido</ToolbarButton>}>
      <OrderTable
        orders={listOrder.elements}
        loading={listOrder.listLoading}
        error={listOrder.listError}
      />
      <NewOrderDrawer
        groupedProducts={groupedProducts.elements}
        groupedProductsLoading={groupedProducts.listLoading}
        cart={cart}
        onCreate={onCreate}
        isOpen={drawer.isOpen}
        onClose={drawer.close}
      />
    </Page>
  )
}
