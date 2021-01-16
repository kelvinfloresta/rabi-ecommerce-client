import { Observable } from 'rxjs'
import httpRequest from 'src/adapters/HttpRequest'

export interface IOrderItem {
  readonly productId: string
  readonly productName: string
  readonly quantity: number
}

export interface IOrder {
  readonly id: string
  readonly clientName: string
  readonly items: IOrderItem[]
  readonly total: number
}

export interface ICreateOrderInput {
  readonly userId: string | null
  readonly items: readonly {
    readonly productId: string
    readonly quantity: number
  }[]
}

export const orderService = {
  create(newOrder: ICreateOrderInput) {
    return httpRequest.post<string>('/order', newOrder)
  },
  list(): Observable<IOrder[]> {
    return httpRequest.get<IOrder[]>('/order')
  },
}
