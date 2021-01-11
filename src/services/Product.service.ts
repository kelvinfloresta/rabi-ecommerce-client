import _groupBy from 'lodash/groupBy'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

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

export type IGroupedProductsByCategory = [string, IProduct[]]

export const productService = {
  create(newProduct: ICreateProductInput) {
    return httpRequest.post<string>('/product', newProduct)
  },
  list(): Observable<IProduct[]> {
    return httpRequest.get<IProduct[]>('/product')
  },
  listGroupedByCategory() {
    return productService.list().pipe(
      map(x => _groupBy(x, 'categoryName')),
      map(x => Object.entries(x)),
    )
  },
  delete(id: string) {
    return httpRequest.delete<never>('/product/' + id)
  },
  patch(id: string, input: IPatchProductInput) {
    return httpRequest.patch<never>('/product/' + id, input)
  },
}
