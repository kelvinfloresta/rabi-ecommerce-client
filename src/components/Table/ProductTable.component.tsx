import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { Observable } from 'rxjs'
import { TableData } from 'src/frameworks/components/TableData.component'
import { useActiveColumn } from 'src/frameworks/hooks/useActiveColumn'
import { useDeleteColumn } from 'src/frameworks/hooks/useDeleteColumn'
import { IMultipleLoading } from 'src/hooks/CRUD/ICRUD.hook'
import { IProduct } from 'src/services/Product.service'
import { formatCurrency } from 'src/utils/Format.util'

interface IProductTableProps {
  products: IProduct[]
  loading: boolean
  error: any

  onActive(id: string, active: boolean): void
  activeLoading: IMultipleLoading

  onDelete(id: string): Observable<never>
  deleteLoading: boolean
}

const defaultColumns: ColumnsType<IProduct> = [
  {
    title: 'Nome',
    width: '20%',
    dataIndex: 'name',
    sortOrder: 'ascend',
    showSorterTooltip: false,
    sortDirections: [],
    sorter: (a, b) => {
      const result = a.name.localeCompare(b.name)
      if (result !== 0) return result
      return a.id.localeCompare(b.id)
    },
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    render: formatCurrency,
  },
  {
    title: 'Categoria',
    dataIndex: 'categoryName',
  },
  {
    title: 'Descrição',
    dataIndex: 'description',
  },
]

export function ProductTable({
  products,
  loading,
  error,
  onActive,
  activeLoading,
  onDelete,
  deleteLoading,
}: IProductTableProps) {
  const deleteColumn = useDeleteColumn<IProduct>({
    deleteLoading,
    onDelete,
  })

  const activeColumn = useActiveColumn<IProduct>({
    activeLoading,
    onActive,
  })

  const allColumns = [...defaultColumns, activeColumn, deleteColumn]
  return (
    <TableData
      columns={allColumns}
      dataSource={products}
      error={error}
      loading={loading}
    />
  )
}
