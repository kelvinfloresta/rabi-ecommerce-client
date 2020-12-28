import { Observable } from 'rxjs'

export default interface IHttpRequest {
  post<TResponse, TBody = any>(url: string, body?: TBody): Observable<TResponse>
  patch<TResponse, TBody = any>(
    url: string,
    body?: TBody,
  ): Observable<TResponse>
  get<TResponse>(url: string): Observable<TResponse>
  delete<TResponse>(url: string): Observable<TResponse>
  setToken(token: string): void
  isAuthenticated(): boolean
}
