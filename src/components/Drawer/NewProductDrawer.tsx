import { Drawer } from 'antd'
import React, { useContext, useMemo } from 'react'

import { ProductPaneContext } from '../../contexts/ProductPage/ProductPane.context'
import { makeUseList } from '../../hooks/CRUD/makeUseList.hook'
import { categoryService } from '../../services/Category.service'
import { ProductForm } from '../Form/ProductForm/ProductForm.component'

import { IDrawerProps } from './IDrawer'

const useCategoryList = makeUseList(categoryService.list, undefined)

export function NewProductDrawer({ isOpen, onClose }: IDrawerProps) {
  const { createProduct } = useContext(ProductPaneContext)
  const {
    elements: categories,
    listLoading: categoriesLoading,
  } = useCategoryList()

  const options = useMemo(
    () => categories.map(el => ({ label: el.name, value: el.id })),
    [categories],
  )

  return (
    <Drawer
      title="Novo produto"
      placement="right"
      onClose={onClose}
      visible={isOpen}>
      <ProductForm
        onCreate={createProduct.create}
        onChange={createProduct.onChange}
        loading={createProduct.loading}
        categoriesLoading={categoriesLoading}
        categories={options}
        form={createProduct.form}
      />
    </Drawer>
  )
}
