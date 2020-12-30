import { Table } from 'antd'
import { TableProps } from 'antd/lib/table'
import React from 'react'
import styled from 'styled-components'

export type IStyledTable<RecordType extends object> = (
  props: TableProps<RecordType>,
) => React.ReactElement

export const StyledTable = styled(Table)`
  .ant-table .action-button:not(th) {
    cursor: pointer;
    width: 48px;
    font-size: 1rem;
  }
`
