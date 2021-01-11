import { Button, Drawer } from 'antd'
import React from 'react'
import { IGroupedProductsByCategory } from 'src/services/Product.service'

import { ICart } from '../Form/OrderForm/IOrderForm.component'
import { OrderForm } from '../Form/OrderForm/OrderForm.component'

import { IDrawerProps } from './IDrawer'

interface INewOrderDrawerProps extends IDrawerProps {
  groupedProductsLoading: boolean
  groupedProducts: IGroupedProductsByCategory[]
  cart: ICart
  onCreate(): void
}

export function NewOrderDrawer({
  isOpen,
  onClose,
  groupedProducts,
  groupedProductsLoading,
  cart,
  onCreate,
}: INewOrderDrawerProps) {
  return (
    <Drawer
      width="100%"
      title="Novo pedido"
      placement="right"
      visible={isOpen}
      onClose={onClose}
      footer={
        <Button
          onClick={onCreate}
          block
          size="large"
          type="primary"
          htmlType="button">
          Criar pedido
        </Button>
      }>
      <OrderForm
        cart={cart}
        groupedProducts={groupedProducts}
        groupedProductsLoading={groupedProductsLoading}
      />
    </Drawer>
  )
}
