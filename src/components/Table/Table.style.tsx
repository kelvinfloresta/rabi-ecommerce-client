import React from 'react'
import { Table } from 'antd'
import styled from 'styled-components'
import { TableProps } from 'antd/lib/table'

export type IStyledTable<RecordType extends object = any> = (props: TableProps<RecordType>) => React.ReactElement;

export const StyledTable = styled(Table)`
    .ant-table {
        .action-button {
            cursor: pointer;
            width: 30px;
            font-size: 1rem;
        }

        .ant-pagination {
            position: absolute;
            top: -4rem;
            right: 0;
        } 
    }
`
