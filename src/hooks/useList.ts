import { useState } from 'react'
import { throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'

import { IListObservable } from './IHooks'

export function useList<TElement, TFilter = undefined>(
  service: IListObservable<TElement, TFilter>,
  filter: TFilter,
) {
  const [elements, setElements] = useState<TElement[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  function onSuccess(elements: TElement[]) {
    setElements(elements)
    setLoading(false)
  }

  function onError(error: any) {
    setLoading(false)
    setError(error)
    return throwError(error)
  }

  function list() {
    setLoading(true)
    setError(null)

    return service(filter).pipe(tap(onSuccess)).pipe(catchError(onError))
  }

  return {
    elements,
    setElements,
    list,
    listLoading: loading,
    listError: error,
  }
}
