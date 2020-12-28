import httpRequest from '../adapters/HttpRequest'

export interface ICategory {
  id: string
  name: string
  description?: string
}

export interface ICreateCategoryInput {
  name: string
  description?: string
}

export const categoryService = {
  create(newCategory: ICreateCategoryInput) {
    return httpRequest.post<string>('/category', newCategory)
  },
  list() {
    return httpRequest.get<ICategory[]>('/category')
  },
  delete(id: string) {
    return httpRequest.delete<never>('/category/' + id)
  },
}
