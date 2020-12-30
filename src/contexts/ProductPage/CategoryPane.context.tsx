import React, { ReactNode } from 'react'
import { throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'

import { Message } from '../../components/Message/Message'
import {
  useCategoryList,
  useCategoryDelete,
  useCategoryForm,
} from '../../hooks/Category.hook'

interface ICategoryPaneContext {
  listCategory: ReturnType<typeof useCategoryList>
  deleteCategory: ReturnType<typeof useCategoryDelete>
  createCategory: ReturnType<typeof useCategoryForm>
}

export const CategoryPaneContext = React.createContext<ICategoryPaneContext>(
  {} as any,
)

export function CategoryPaneProvider({ children }: { children: ReactNode }) {
  const listCategory = useCategoryList()
  const createCategory = useCategoryForm()
  const deleteCategory = useCategoryDelete()

  function del(id: string) {
    return deleteCategory
      .del(id)
      .pipe(tap(() => Message.success.delete('categoria')))
      .pipe(
        catchError(error => {
          Message.error.delete('categoria')
          return throwError(error)
        }),
      )
  }

  return (
    <CategoryPaneContext.Provider
      value={{
        listCategory,
        deleteCategory: {
          del,
          deleteError: deleteCategory.deleteError,
          deleteLoading: deleteCategory.deleteLoading,
        },
        createCategory,
      }}>
      {children}
    </CategoryPaneContext.Provider>
  )
}
