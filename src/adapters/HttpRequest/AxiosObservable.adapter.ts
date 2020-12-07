import AxiosObservable from 'axios-observable'
import { throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

import IHttpRequest from './IHttpRequest.adapter'

export default class AxiosObservableAdapter implements IHttpRequest {
  httpRequest: AxiosObservable;

  constructor (baseURL: string) {
    this.httpRequest = AxiosObservable.create({
      baseURL
    })
  }

  setToken = (token: string) => {
    this.httpRequest.defaults.headers.Authorization = token
  }

  onError (error: any) {
    if (error?.response?.data) {
      return throwError(error.response.data)
    }
    return throwError(error)
  }

  post<TResponse, TBody> (url: string, data?: TBody) {
    return this.httpRequest
      .post<TResponse>(url, data)
      .pipe(map(response => response.data))
      .pipe(catchError(this.onError))
  }

  get<T> (url: string) {
    return this.httpRequest
      .get<T>(url)
      .pipe(map(response => response.data))
      .pipe(catchError(this.onError))
  }
}
