import { ColumnsType } from 'antd/lib/table'
import React, { useState, useMemo } from 'react'
import { Observable } from 'rxjs'

import { ConfirmDelete } from '../../components/Table/ConfirmDelete.component'

export interface ITableDataDelete {
  onDelete(id: string): Observable<never>
  deleteLoading: boolean
}

export function useDeleteColumn<RecordType extends { id: string }>({
  deleteLoading,
  onDelete,
}: ITableDataDelete): ColumnsType<RecordType>[number] {
  const [id, setId] = useState<string | null>(null)

  function onConfirm() {
    if (!id) {
      return
    }
    onDelete(id).subscribe(() => setId(null))
  }

  function onClickCell(record: RecordType) {
    return () => {
      const alreadyOpen = id !== null
      if (alreadyOpen) {
        return
      }
      setId(record.id)
    }
  }

  function createDeleteColumn(): ColumnsType<RecordType>[number] {
    return {
      className: 'action-button',
      onCell: record => ({
        title: 'Excluir',
        onClick: onClickCell(record),
      }),
      render(_, record) {
        return (
          <ConfirmDelete
            id={record.id}
            onClose={() => setId(null)}
            onConfirm={onConfirm}
            isOpen={id === record.id}
            loading={deleteLoading}
          />
        )
      },
    }
  }

  const deleteColumn = useMemo(() => {
    const deleteColumn = createDeleteColumn()
    return deleteColumn
  }, [id, deleteLoading])

  return deleteColumn
}
