import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { Observable } from 'rxjs'

import { TableData } from '../../frameworks/components/TableData.component'
import { useDeleteColumn } from '../../frameworks/hooks/useDeleteColumn'
import { ICategory } from '../../services/Category.service'

interface ICategoryTableProps {
  categories: ICategory[]
  onDelete(id: string): Observable<never>
  deleteLoading: boolean
  loading: boolean
  error: any
}

const defaultColumns: ColumnsType<ICategory> = [
  {
    title: 'Nome',
    width: '20%',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Descrição',
    dataIndex: 'description',
  },
]

export function CategoryTable({
  categories,
  loading,
  error,
  onDelete,
  deleteLoading,
}: ICategoryTableProps) {
  const deleteColumn = useDeleteColumn<ICategory>({
    deleteLoading,
    onDelete,
  })

  return (
    <TableData
      columns={[...defaultColumns, deleteColumn]}
      loading={loading}
      dataSource={categories}
      error={error}
    />
  )
}
