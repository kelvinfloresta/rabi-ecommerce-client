/* eslint-disable react/display-name */
import React from 'react'
import { Popconfirm } from 'antd'
import { ICategory } from '../../../services/Category.service'
import {
  DeleteTwoTone
} from '@ant-design/icons'
import { useConfirm } from '../../../hooks/useConfirm'
import { useCategoryDelete } from '../../../hooks/Category/useCategoryDelete'
import { StyledCategoryTable } from './CategoryTable.style'

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

  function onCell (category: ICategory) {
    if (openedConfirm) {
      return { title: 'Excluir' }
    }

    return { title: 'Excluir', onClick: onOpenConfirm(category.id) }
  }

  return <StyledCategoryTable
    bordered
    style={{ marginTop: '4rem' }}
    loading={loading}
    rowKey="name"
    pagination={{ pageSize: 5, responsive: true }}
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
      className: 'action-button',
      onCell: onCell,
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
          <DeleteTwoTone twoToneColor="#ff7875" />
        </Popconfirm>
      )
    }
    ]}
    dataSource={categories}
  />
}
