import { useState } from 'react'
import { throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'

import { ChangeEvent } from '../../components/Form/IForm'
import { categoryService } from '../../services/Category.service'

export function useCategoryCreate() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  function onSuccess() {
    setName('')
    setDescription(undefined)
    setLoading(false)
  }

  function onError(error: any) {
    setLoading(false)
    setError(error)
    return throwError(error)
  }

  function createCategory() {
    setLoading(true)
    setError(null)

    return categoryService
      .create({ name, description })
      .pipe(tap(onSuccess))
      .pipe(catchError(onError))
  }

  function onChange(e: ChangeEvent) {
    const { name, value } = e.target
    if (name === 'name') {
      return setName(value as string)
    }

    if (name === 'description') {
      return setDescription(value as string)
    }
  }

  return {
    categoryName: name,
    description,
    onChange,
    createCategory,
    categoryLoading: loading,
    categoryError: error,
  }
}
