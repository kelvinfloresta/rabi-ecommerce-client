/* eslint-disable react/display-name */
import React from 'react'
import { Table, Popconfirm } from 'antd'
import { ICategory } from '../../../services/Category.service'
import {
  DeleteTwoTone
} from '@ant-design/icons'
import { useConfirm } from '../../../hooks/useConfirm'
import { useCategoryDelete } from '../../../hooks/Category/useCategoryDelete'

export interface ICategoryTableProps {
  loading: boolean
  categories: ICategory[]
  onDelete: () => void
}

export function CategoryTable ({ categories, loading, onDelete }: ICategoryTableProps) {
  const { deleteCategory, categoryDeleteLoading } = useCategoryDelete()

  const { cleanConfirm, openedConfirm, setOpenedConfirm } = useConfirm()

  function onConfirmDelete (id: string) {
    return () => deleteCategory(id)
      .subscribe(() => {
        cleanConfirm()
        onDelete()
      })
  }

  function onOpenConfirm (id: string) {
    return () => setOpenedConfirm(id)
  }

  return <Table
    bordered
    style={{ marginTop: '4rem' }}
    loading={loading}
    rowKey="name"
    pagination={{ pageSize: 5, responsive: true, style: { position: 'absolute', top: '-4rem', right: 0 } }}
    columns={[{
      title: 'Nome',
      width: '20%',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description'
    },
    {
      width: '30px',
      render: (_, record) => (
        <Popconfirm
          placement='left'
          title="Deseja realmente excluir?"
          okText="Sim"
          cancelText="Não"
          visible={openedConfirm === record.id}
          onConfirm={onConfirmDelete(record.id)}
          onCancel={cleanConfirm}
          okButtonProps={{ loading: categoryDeleteLoading }}
        >
          <DeleteTwoTone title="Excluir" twoToneColor="#f00" onClick={onOpenConfirm(record.id)} />
        </Popconfirm>
      )
    }
    ]}
    dataSource={categories}
  />
}
