import { Button } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { IOrder } from 'src/services/Order.service'
import { formatCurrency } from 'src/utils/Format.util'

import { TableData } from '../../frameworks/components/TableData.component'
import { ToolbarButton } from '../Toolbar'

interface IOrderTableProps {
  orders: IOrder[]
  loading: boolean
  error: any
}

const defaultColumns: ColumnsType<IOrder> = [
  {
    title: 'Cliente',
    dataIndex: 'clientName',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    render: formatCurrency,
  },
  {
    className: 'action-button',
    render() {
      return <ToolbarButton onClick={console.log}>Adicionar</ToolbarButton>
    },
  },
  {
    className: 'action-button',
    render() {
      return <Button danger>Cancelar</Button>
    },
  },
  {
    className: 'action-button',
    render() {
      return (
        <Button ghost type="primary">
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
