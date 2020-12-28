import { useState } from 'react'
import { throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'

import { IPatchObservable } from './IHooks'

export function useActive<TFilter>(
  service: IPatchObservable<TFilter, { active: boolean }>,
) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  function onSuccess() {
    setError(null)
    setLoading(false)
  }

  function onError(error: any) {
    setLoading(false)
    setError(error)
    return throwError(error)
  }

  function active(filter: TFilter, active: boolean) {
    setLoading(true)
    setError(null)

    return service(filter, { active })
      .pipe(tap(onSuccess))
      .pipe(catchError(onError))
  }

  return {
    active,
    activeLoading: loading,
    activeError: error,
  }
}
