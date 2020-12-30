import { ColumnsType } from 'antd/lib/table'
import React from 'react'

import { StyledTable, IStyledTable } from './Table.style'

export interface ITableDataProps<RecordType extends { id: string }> {
  dataSource: RecordType[]
  loading: boolean
  columns: ColumnsType<RecordType>
  error: any
}

export function TableData<RecordType extends { id: string }>({
  dataSource,
  loading,
  columns,
}: ITableDataProps<RecordType>) {
  const Table: IStyledTable<RecordType> = StyledTable

  return (
    <Table
      bordered
      loading={loading}
      rowKey="id"
      pagination={{
        responsive: true,
        hideOnSinglePage: true,
      }}
      columns={columns}
      dataSource={dataSource}
    />
  )
}
