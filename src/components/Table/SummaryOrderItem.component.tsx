import { Tag, Typography } from 'antd'
import React, { Fragment } from 'react'
import { IOrderItem } from 'src/services/Order.service'
import { formatCurrency } from 'src/utils/Format.util'

import { Flex } from '../Flex'

interface SummaryOrderItemProps {
  items: IOrderItem[]
  total: number
}

export function SummaryOrderItem({ items, total }: SummaryOrderItemProps) {
  return (
    <Fragment>
      {items.map(item => (
        <Flex key={item.productId} justifyContent="space-between">
          <div>
            <Tag>{item.quantity}</Tag>
            {item.productName}
          </div>
          {formatCurrency(item.total)}
        </Flex>
      ))}
      <Flex margin="2rem 0 0 0" justifyContent="space-between">
        <Typography.Text strong>Total:</Typography.Text>
        <Typography.Text strong>{formatCurrency(total)}</Typography.Text>
      </Flex>
    </Fragment>
  )
}
