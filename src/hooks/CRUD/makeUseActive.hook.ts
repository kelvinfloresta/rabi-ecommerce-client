import { useState } from 'react'
import { throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'

import {
  IPatchObservable,
  IMultipleLoading,
  IMultipleError,
} from './ICRUD.hook'

export function makeUseActive(
  service: IPatchObservable<string, { active: boolean }>,
) {
  return function useActive() {
    const [loading, setLoading] = useState<IMultipleLoading>({})
    const [error, setError] = useState<IMultipleError>({})

    function onSuccess(id: string) {
      return () => {
        setError(error => ({ ...error, [id]: null }))
        setLoading(loading => ({ ...loading, [id]: false }))
      }
    }

    function onError(id: string) {
      return (err: any) => {
        setError(error => ({ ...error, [id]: err }))
        setLoading(loading => ({ ...loading, [id]: false }))
        return throwError(error)
      }
    }

    function active(id: string, active: boolean) {
      setError(error => ({ ...error, [id]: null }))
      setLoading(loading => ({ ...loading, [id]: true }))

      return service(id, { active })
        .pipe(tap(onSuccess(id)))
        .pipe(catchError(onError(id)))
    }

    return {
      active,
      activeLoading: loading,
      activeError: error,
    }
  }
}
