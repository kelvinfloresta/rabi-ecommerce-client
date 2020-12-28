import { DeleteTwoTone } from '@ant-design/icons'
import { Popconfirm } from 'antd'
import React from 'react'

interface IConfirmDeleteProps {
  id: string
  isOpen: boolean
  loading: boolean
  onConfirm(id: string): void
  onClose(): void
}

export function ConfirmDelete({
  id,
  isOpen,
  onClose,
  onConfirm,
  loading,
}: IConfirmDeleteProps) {
  return (
    <Popconfirm
      placement="left"
      title="Deseja realmente excluir?"
      okText="Sim"
      cancelText="Não"
      visible={isOpen}
      onConfirm={() => onConfirm(id)}
      onCancel={onClose}
      okButtonProps={{ loading }}>
      <DeleteTwoTone twoToneColor="#ff7875" />
    </Popconfirm>
  )
}
