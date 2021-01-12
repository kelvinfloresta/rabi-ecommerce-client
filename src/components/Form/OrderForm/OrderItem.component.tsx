import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import { Typography, List } from 'antd'
import React from 'react'
import { Flex } from 'src/components/Flex'
import { formatCurrency } from 'src/utils/Format.util'

import { IOrderFormItem } from './IOrderForm.component'

export function OrderItem({
  id,
  quantity,
  name,
  description,
  price,
  onDecrement,
  onIncrement,
}: IOrderFormItem) {
  const parsedQuantity = quantity || 0
  return (
    <List.Item>
      <Flex flexDirection="column">
        <Typography.Text>{name}</Typography.Text>
        <Typography.Text type="secondary">{description}</Typography.Text>
        <Typography.Text>{formatCurrency(price)}</Typography.Text>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="100px"
          margin="1rem 0">
          <MinusCircleOutlined
            onClick={() => onDecrement(id)}
            style={{ fontSize: '1.5rem', userSelect: 'none' }}
          />
          {parsedQuantity}
          <PlusCircleOutlined
            onClick={() => onIncrement(id)}
            style={{ fontSize: '1.5rem', userSelect: 'none' }}
          />
        </Flex>
      </Flex>
    </List.Item>
  )
}
