import { Table } from 'antd'
import { TableProps } from 'antd/lib/table'
import React from 'react'
import styled from 'styled-components'

export type IStyledTable<RecordType extends object> = (
  props: TableProps<RecordType>,
) => React.ReactElement

export const StyledTable = styled(Table)`
  margin-top: 4rem;

  .ant-table .action-button {
    cursor: pointer;
    width: 48px;
    font-size: 1rem;
  }

  .ant-pagination {
    position: absolute;
    top: -4rem;
    right: 0;
  }
`
