import React, { useEffect } from 'react'
import { Page } from '../../components/Page/Page.component'

import { CategoryForm } from '../../components/Form/CategoryForm/CategoryForm.component'
import { useCategoryCreate } from '../../hooks/Category/useCategoryCreate'
import { Card, Typography } from 'antd'
import { CategoryTable } from '../../components/Table/CategoryTable/CategoryTable.component'
import { useCategoryList } from '../../hooks/Category/useCategoryList'

const { Title } = Typography

export default function Product () {
  const { categoryName, description, onChange, saveCategory, categoryLoading } = useCategoryCreate()
  const { categories, listCategory, listCategoryLoading } = useCategoryList()

  function onSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    saveCategory()
      .subscribe(() => listCategory().subscribe())
  }

  function onDelete () {
    listCategory().subscribe()
  }

  useEffect(() => {
    const subscription = listCategory().subscribe()
    return () => subscription.unsubscribe()
  }, [])

  return (
    <Page title="Categorias">
      <Card>
        <Title level={4}>Nova Categoria</Title>
        <CategoryForm
          categoryName={categoryName}
          description={description}
          onChange={onChange}
          onSubmit={onSubmit}
          loading={categoryLoading}
        />
        <CategoryTable
          categories={categories}
          loading={listCategoryLoading}
          onDelete={onDelete}
        />
      </Card>
    </Page>
  )
}
