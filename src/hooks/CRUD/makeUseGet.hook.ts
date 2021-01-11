import { useState } from 'react'
import { throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'
import { IEmpty } from 'src/utils/Empty.util'

import { IGetObservable } from './ICRUD.hook'

export function makeUseGet<TElement, TFilter = undefined>(
  service: IGetObservable<TElement, TFilter>,
  empty: IEmpty<TElement>,
) {
  return function useGet(filter: TFilter) {
    const [element, setElement] = useState<TElement | IEmpty<TElement>>(empty)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    function onSuccess(element: TElement) {
      setElement(element)
      setLoading(false)
    }

    function onError(error: any) {
      setLoading(false)
      setError(error)
      return throwError(error)
    }

    function get() {
      setLoading(true)
      setError(null)

      return service(filter).pipe(tap(onSuccess)).pipe(catchError(onError))
    }

    return {
      get,
      element,
      getLoading: loading,
      getError: error,
    }
  }
}
