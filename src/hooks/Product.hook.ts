import {
  productService,
  ICreateProductInput,
} from '../services/Product.service'
import { IEmpty } from '../utils/Empty.util'

import { makeUseActive } from './CRUD/makeUseActive.hook'
import { makeUseDelete } from './CRUD/makeUseDelete.hook'
import { makeUseForm } from './CRUD/makeUseForm.hook'
import { makeUseList } from './CRUD/makeUseList.hook'

export const useActiveProduct = makeUseActive(productService.patch)

export const useDeleteProduct = makeUseDelete(productService.delete)

export const useProductList = makeUseList(productService.list, undefined)

export const useGroupedProductsByCategory = makeUseList(
  productService.listGroupedByCategory,
  undefined,
)

const EMPTY_PRODUCT: IEmpty<ICreateProductInput> = {
  name: '',
  price: 1,
  description: '',
  active: true,
  categoryId: null,
  isEmpty: true,
}

export const useProductForm = makeUseForm(productService.create, EMPTY_PRODUCT)
