import React, { ReactNode } from 'react'
import { throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'

import { Message } from '../../components/Message/Message'
import {
  useDeleteProduct,
  useProductForm,
  useProductList,
} from '../../hooks/Product.hook'
import { IProduct } from '../../services/Product.service'

interface IProductPaneContext {
  listProduct: ReturnType<typeof useProductList>
  deleteProduct: ReturnType<typeof useDeleteProduct>
  createProduct: Omit<ReturnType<typeof useProductForm>, 'create'> & {
    create: () => void
  }
  updateProduct: (id: string, data: Partial<IProduct>) => void
}

export const ProductPaneContext = React.createContext<IProductPaneContext>(
  {} as any,
)

export function ProductPaneProvider({ children }: { children: ReactNode }) {
  const listProduct = useProductList()
  const createProduct = useProductForm()
  const deleteProduct = useDeleteProduct()

  function del(id: string) {
    return deleteProduct
      .del(id)
      .pipe(tap(() => Message.success.delete('produto')))
      .pipe(
        catchError(error => {
          Message.error.delete('produto')
          return throwError(error)
        }),
      )
  }

  function onCreate() {
    createProduct.create()?.subscribe(
      () => Message.success.create('produto'),
      () => Message.error.create('produto'),
    )
  }

  function updateProduct(id: string, data: Partial<IProduct>) {
    listProduct.setElements(products => {
      return products.map(product => {
        if (product.id !== id) return product
        return { ...product, ...data }
      })
    })
  }

  return (
    <ProductPaneContext.Provider
      value={{
        listProduct,
        deleteProduct: {
          del,
          deleteError: deleteProduct.deleteError,
          deleteLoading: deleteProduct.deleteLoading,
        },
        createProduct: {
          form: createProduct.form,
          result: createProduct.result,
          onChange: createProduct.onChange,
          create: onCreate,
          loading: createProduct.loading,
          error: createProduct.error,
        },
        updateProduct,
      }}>
      {children}
    </ProductPaneContext.Provider>
  )
}
