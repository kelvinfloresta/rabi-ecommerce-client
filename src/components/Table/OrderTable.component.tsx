import { DollarTwoTone } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { IOrder } from 'src/services/Order.service'
import { formatCurrency } from 'src/utils/Format.util'

import { TableData } from '../../frameworks/components/TableData.component'

interface IOrderTableProps {
  orders: IOrder[]
  loading: boolean
  error: any
}

const defaultColumns: ColumnsType<IOrder> = [
  {
    title: 'Cliente',
    dataIndex: 'clientId',
    render(_, record) {
      return record.clientName || 'Cliente anônimo'
    },
  },
  {
    className: 'action-button',
    render() {
      return (
        <Button icon={<DollarTwoTone />} type="default">
          Pagar
        </Button>
      )
    },
  },
]

export function OrderTable({ orders, loading, error }: IOrderTableProps) {
  return (
    <TableData
      columns={defaultColumns}
      loading={loading}
      dataSource={orders}
      error={error}
    />
  )
}
