import { useState, ChangeEvent } from 'react'
import { tap, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'
import { categoryService } from '../../services/Category.service'

export function useCategoryCreate () {
  const [name, setName] = useState('')
  const [description, setDescription] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  function onSuccess () {
    setName('')
    setDescription(undefined)
    setLoading(false)
  }

  function onError (error: any) {
    setLoading(false)
    setError(error)
    return throwError(error)
  }

  function saveCategory () {
    setLoading(true)
    setError(null)

    return categoryService
      .create({ name, description })
      .pipe(tap(onSuccess))
      .pipe(catchError(onError))
  }

  function onChange (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    if (name === 'name') {
      return setName(value)
    }

    if (name === 'description') {
      return setDescription(value)
    }
  }

  return {
    categoryName: name,
    description,
    onChange,
    saveCategory,
    categoryLoading: loading,
    categoryError: error
  }
}
