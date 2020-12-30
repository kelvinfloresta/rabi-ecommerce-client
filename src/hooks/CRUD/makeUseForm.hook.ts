import { useState } from 'react'
import { throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'

import { ChangeEvent } from '../../components/Form/IForm'
import { IEmpty, isEmpty } from '../../utils/Empty.util'

import { ICreateObservable } from './ICRUD.hook'

export function makeUseForm<TInput, TOutput>(
  save: ICreateObservable<TInput, TOutput>,
  empty: IEmpty<TInput>,
) {
  return function useForm() {
    const [form, setForm] = useState<TInput | IEmpty<TInput>>(empty)
    const [result, setResult] = useState<TOutput | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    function onSuccess(output: TOutput) {
      setForm(empty)
      setResult(output)
      setLoading(false)
    }

    function onError(error: any) {
      setLoading(false)
      setError(error)
      return throwError(error)
    }

    function create() {
      if (isEmpty(form)) {
        return
      }

      setLoading(true)
      setError(null)
      setResult(null)

      return save(form).pipe(tap(onSuccess)).pipe(catchError(onError))
    }

    function onChange(e: ChangeEvent) {
      const { name, value, type, checked } = e.target
      const newValue = type === 'checkbox' ? checked : value
      const newValues = { ...form, [name]: newValue, isEmpty: undefined }
      setForm(newValues)
    }

    return {
      form,
      result,
      onChange,
      create,
      loading,
      error,
    }
  }
}
