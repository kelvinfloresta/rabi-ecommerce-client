import { DollarTwoTone } from '@ant-design/icons'
import { Button } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { IOrder } from 'src/services/Order.service'

import { TableData } from '../../frameworks/components/TableData.component'

import { SummaryOrderItem } from './SummaryOrderItem.component'

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
      expandable={{
        expandedRowRender(record) {
          const total = record.items.reduce((acc, item) => acc + item.total, 0)
          return <SummaryOrderItem items={record.items} total={total} />
        },
      }}
      loading={loading}
      dataSource={orders}
      error={error}
    />
  )
}
