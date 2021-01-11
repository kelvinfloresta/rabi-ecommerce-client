import { orderService } from 'src/services/Order.service'

import { makeUseCreate } from './CRUD/makeUseCreate.hook'
import { makeUseList } from './CRUD/makeUseList.hook'

export const useOrderList = makeUseList(orderService.list, undefined)
export const useOrderCreate = makeUseCreate(orderService.create)
