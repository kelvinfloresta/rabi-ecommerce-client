import React, { useContext, useEffect } from 'react'
import { tap } from 'rxjs/operators'
import { CategoryTable } from 'src/components/Table/CategoryTable.component'
import { TableToolbar } from 'src/components/Table/TableToolbar.component'
import { ToolbarButton } from 'src/components/Toolbar'
import { CategoryPaneContext } from 'src/contexts/ProductPage/CategoryPane.context'

export function CategoryTableOfProductPage() {
  const { listCategory, deleteCategory } = useContext(CategoryPaneContext)

  useEffect(() => {
    const subscription = listCategory.list().subscribe()
    return () => subscription.unsubscribe()
  }, [])

  function onReload() {
    listCategory.list().subscribe()
  }

  function onDelete(id: string) {
    return deleteCategory
      .del(id)
      .pipe(tap(() => listCategory.list().subscribe()))
  }

  return (
    <>
      <TableToolbar>
        <ToolbarButton
          loading={listCategory.listLoading}
          onClick={onReload}
          type="reload">
          Atualizar
        </ToolbarButton>
      </TableToolbar>
      <CategoryTable
        categories={listCategory.elements}
        loading={listCategory.listLoading}
        error={listCategory.listError}
        onDelete={onDelete}
        deleteLoading={deleteCategory.deleteLoading}
      />
    </>
  )
}
