import { of, Observable } from 'rxjs'
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
    const mock: IOrder[] = [
      {
        id: '1',
        clientName: 'Client 1',
        total: 100,
        items: [{ productId: '1', productName: 'banana', quantity: 1 }],
      },
      {
        id: '2',
        clientName: 'Client 2',
        total: 100,
        items: [{ productId: '1', productName: 'banana', quantity: 1 }],
      },
    ]
    return of(mock)
  },
}
