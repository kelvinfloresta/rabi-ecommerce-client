import {
  categoryService,
  ICreateCategoryInput,
} from '../services/Category.service'
import { IEmpty } from '../utils/Empty.util'

import { makeUseDelete } from './CRUD/makeUseDelete.hook'
import { makeUseForm } from './CRUD/makeUseForm.hook'
import { makeUseList } from './CRUD/makeUseList.hook'

export const useCategoryList = makeUseList(categoryService.list, undefined)
export const useCategoryDelete = makeUseDelete(categoryService.delete)

const EMTPY_CATEGORY: IEmpty<ICreateCategoryInput> = {
  name: '',
  description: '',
  isEmpty: true,
}

export const useCategoryForm = makeUseForm(
  categoryService.create,
  EMTPY_CATEGORY,
)
