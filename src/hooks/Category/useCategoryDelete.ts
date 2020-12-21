import { useState } from 'react'
import { categoryService } from '../../services/Category.service'
import { tap, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'

export function useCategoryDelete () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  function onSuccess () {
    setLoading(false)
  }

  function onError (error: any) {
    setLoading(false)
    setError(error)
    return throwError(error)
  }

  function deleteCategory (id: string) {
    setLoading(true)
    setError(null)

    return categoryService
      .delete(id)
      .pipe(tap(onSuccess))
      .pipe(catchError(onError))
  }

  return {
    deleteCategory,
    categoryDeleteLoading: loading,
    categoryDeleteError: error
  }
}
