import type { IProduct } from './product'

export interface ICategory {
  id: number
  description: string
  products: IProduct[]
}
