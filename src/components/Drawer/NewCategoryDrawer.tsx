import { Drawer } from 'antd'
import React, { useContext } from 'react'

import { CategoryPaneContext } from '../../contexts/ProductPage/CategoryPane.context'
import { CategoryForm } from '../Form/CategoryForm/CategoryForm.component'
import { Message } from '../Message/Message'

import { IDrawerProps } from './IDrawer'

export function NewCategoryDrawer({ isOpen, onClose }: IDrawerProps) {
  const { createCategory } = useContext(CategoryPaneContext)

  function onCreate() {
    return createCategory.create()?.subscribe(
      () => Message.success.create('categoria'),
      () => Message.error.create('categoria'),
    )
  }

  return (
    <Drawer
      title="Nova categoria"
      placement="right"
      visible={isOpen}
      onClose={onClose}>
      <CategoryForm
        onCreate={onCreate}
        onChange={createCategory.onChange}
        form={createCategory.form}
        loading={createCategory.loading}
      />
    </Drawer>
  )
}
