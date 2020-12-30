import React, { useContext, useEffect } from 'react'
import { tap } from 'rxjs/operators'

import { Message } from '../../../components/Message/Message'
import { ProductTable } from '../../../components/Table/ProductTable/ProductTable.component'
import { TableToolbar } from '../../../components/Table/TableToolbar.component'
import { ToolbarButton } from '../../../components/Toolbar'
import { ProductPaneContext } from '../../../contexts/ProductPage/ProductPane.context'
import { useActiveProduct } from '../../../hooks/Product.hook'

export function ProductTableOfProductPage() {
  const { deleteProduct, listProduct, updateProduct } = useContext(
    ProductPaneContext,
  )
  const { active: activeProduct, activeLoading } = useActiveProduct()

  function onActive(id: string, active: boolean) {
    activeProduct(id, active).subscribe(
      () => updateProduct(id, { active }),
      () => Message.error.update('produto'),
    )
  }

  function onDelete(id: string) {
    return deleteProduct.del(id).pipe(tap(() => listProduct.list().subscribe()))
  }

  function onReload() {
    listProduct.list().subscribe()
  }

  useEffect(() => {
    const subscription = listProduct.list().subscribe()
    return () => subscription.unsubscribe()
  }, [])

  return (
    <>
      <TableToolbar>
        <ToolbarButton
          loading={listProduct.listLoading}
          onClick={onReload}
          type="reload">
          Atualizar
        </ToolbarButton>
      </TableToolbar>
      <ProductTable
        activeLoading={activeLoading}
        loading={listProduct.listLoading}
        products={listProduct.elements}
        error={listProduct.listError}
        onActive={onActive}
        onDelete={onDelete}
        deleteLoading={deleteProduct.deleteLoading}
      />
    </>
  )
}
