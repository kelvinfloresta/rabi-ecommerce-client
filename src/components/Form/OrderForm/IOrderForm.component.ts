import { IGroupedProductsByCategory } from 'src/services/Product.service'

export interface ICart {
  readonly items: { [prouctId: string]: number | undefined }
  increment(productId: string): void
  decrement(productId: string): void
}

export interface IOrderFormProps {
  readonly groupedProducts: IGroupedProductsByCategory[]
  readonly groupedProductsLoading: boolean
  readonly cart: ICart
}

export interface IOrderFormItem {
  readonly onIncrement: ICart['increment']
  readonly onDecrement: ICart['decrement']
  readonly id: string
  readonly quantity?: number
  readonly name: string
  readonly price: number
  readonly description?: string
}
