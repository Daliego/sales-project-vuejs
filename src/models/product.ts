import type { IImage } from './images'
import type { IProductType } from './product_types'

export interface IProduct {
  id: number
  available: number
  images: IImage[]
  stocks: IProductType[]
  short_description: string
  description: string
  client: number
}
