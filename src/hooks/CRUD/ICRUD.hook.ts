import { Observable } from 'rxjs'

export type ICreateObservable<TInput, TOutput> = (
  param: TInput,
) => Observable<TOutput>

export type IDeleteObservable = (param: string) => Observable<never>

export type IListObservable<TList, TFilter> = (
  param: TFilter,
) => Observable<TList[]>

export type IPatchObservable<TFilter, TData> = (
  filter: TFilter,
  data: TData,
) => Observable<never>

export type IMultipleLoading = { [id: string]: boolean | undefined }
export type IMultipleError = { [id: string]: any }
