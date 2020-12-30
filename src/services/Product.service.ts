import { Observable } from 'rxjs'

import httpRequest from '../adapters/HttpRequest'

export interface IProduct {
  readonly id: string
  readonly name: string
  readonly price: number
  readonly description?: string
  readonly active: boolean
  readonly categoryId: string | null
  readonly categoryName: string | null
}

export interface IPatchProductInput {
  readonly name?: string
  readonly price?: number
  readonly description?: string
  readonly active?: boolean
  readonly categoryId?: string | null
}

export interface ICreateProductInput {
  readonly name: string
  readonly price: number
  readonly description?: string
  readonly active?: boolean
  readonly categoryId: string | null
}

export const productService = {
  create(newProduct: ICreateProductInput) {
    return httpRequest.post<string>('/product', newProduct)
  },
  list(): Observable<IProduct[]> {
    return httpRequest.get<IProduct[]>('/product')
  },
  delete(id: string) {
    return httpRequest.delete<never>('/product/' + id)
  },
  patch(id: string, input: IPatchProductInput) {
    return httpRequest.patch<never>('/product/' + id, input)
  },
}
