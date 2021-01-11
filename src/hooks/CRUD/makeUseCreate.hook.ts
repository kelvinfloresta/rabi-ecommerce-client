import { useState } from 'react'
import { throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'

import { ICreateObservable } from './ICRUD.hook'

export function makeUseCreate<TInput, TOutput>(
  serviceCreate: ICreateObservable<TInput, TOutput>,
) {
  return function useCreate() {
    const [result, setResult] = useState<TOutput | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    function onSuccess(output: TOutput) {
      setResult(output)
      setLoading(false)
    }

    function onError(error: any) {
      setLoading(false)
      setError(error)
      return throwError(error)
    }

    function create(data: TInput) {
      setLoading(true)
      setError(null)
      setResult(null)

      return serviceCreate(data).pipe(tap(onSuccess)).pipe(catchError(onError))
    }

    return {
      result,
      create,
      loading,
      error,
    }
  }
}
