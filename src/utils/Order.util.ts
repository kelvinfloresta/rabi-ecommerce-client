import { ICart } from 'src/components/Form/OrderForm/IOrderForm.component'
import { ICreateOrderInput } from 'src/services/Order.service'

export function parseCartItemsToOrderItems(
  items: ICart['items'],
): ICreateOrderInput['items'] {
  return Object.entries(items)
    .map(([productId, quantity]) => ({
      productId,
      quantity: quantity ?? 0,
    }))
    .filter(el => el.quantity > 0)
}
