import { List, Typography } from 'antd'
import Form from 'antd/lib/form/Form'
import React from 'react'

import { IOrderFormProps } from './IOrderForm.component'
import { OrderItem } from './OrderItem.component'

export function OrderForm({
  groupedProducts,
  groupedProductsLoading,
  cart,
}: IOrderFormProps) {
  return (
    <Form>
      <List
        loading={groupedProductsLoading}
        dataSource={groupedProducts}
        renderItem={([categoryName, items]) => {
          return (
            <>
              <Typography.Title level={4}>{categoryName}</Typography.Title>
              {items.map(item => (
                <OrderItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  quantity={cart.items[item.id]}
                  onDecrement={cart.decrement}
                  onIncrement={cart.increment}
                />
              ))}
            </>
          )
        }}
      />
    </Form>
  )
}
