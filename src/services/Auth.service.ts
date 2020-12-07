import { tap, map } from 'rxjs/operators'
import httpRequest from '../adapters/HttpRequest'

function storeToken (token: string) {
  sessionStorage.setItem('token', token)
}

export const authService = {
  login (credential: { email: string, password: string }) {
    return httpRequest.post<string>('/auth', credential)
      .pipe(tap(httpRequest.setToken), tap(storeToken))
      .pipe(map(() => null))
  },
  restoreSession (): boolean {
    const token = sessionStorage.getItem('token')
    if (token === null) {
      return false
    }

    httpRequest.setToken(token)

    return true
  }

}
