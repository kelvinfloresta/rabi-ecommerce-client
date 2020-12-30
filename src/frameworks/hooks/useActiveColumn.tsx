import { Switch } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useMemo } from 'react'

import { IMultipleLoading } from '../../hooks/CRUD/ICRUD.hook'

export interface ITableDataActive {
  onActive(id: string, active: boolean): void
  activeLoading: IMultipleLoading
}

export function useActiveColumn<
  RecordType extends { id: string; active: boolean }
>({
  activeLoading,
  onActive,
}: ITableDataActive): ColumnsType<RecordType>[number] {
  function createActiveColumn(): ColumnsType<RecordType>[number] {
    return {
      className: 'action-button',
      title: 'Ativo?',
      render(_, record) {
        return (
          <Switch
            checked={record.active}
            onChange={active => onActive(record.id, active)}
            loading={activeLoading[record.id]}
          />
        )
      },
    }
  }

  const newColumn = useMemo(() => {
    const activeColumn = createActiveColumn()
    return activeColumn
  }, [activeLoading])

  return newColumn
}
