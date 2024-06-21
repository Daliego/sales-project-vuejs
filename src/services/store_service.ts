import { Axios } from '@/config/axios'
import type { IStore } from '@/models/store'
import type { IStoreDetails } from '@/models/store_details'
import type { ICategory } from '@/models/category'

async function fetchAllStores(): Promise<IStore[]> {
  const response = await Axios.get('/clientes/cliente_01/')

  const stores = response.data.stores as IStore[]

  //Aqui dentro eu vou fazer a conversão do dado, se ele
  //lanãr um erro o componente de cima que deve lidar

  return stores
}

async function fetchStoreDetails(storeSlug: string): Promise<IStoreDetails> {
  const response = await Axios.get(`/lojas/${storeSlug}/`)

  const data = response.data

  const categories = data

  const stores = response.data as IStoreDetails

  return stores
}

async function fetchAllCategoriesFromStore(storeSlug: string): Promise<ICategory[]> {
  const response = await Axios.get(`/categorias/${storeSlug}/`)

  const categories = response.data as ICategory[]

  return categories
}

async function fetchAllCategoriesFromStoreBySearch(
  storeSlug: string,
  search: string
): Promise<ICategory[]> {
  //Supondo que o backend realiza o tratamento de busca search
  const formattedSearch = encodeURIComponent(search)

  const response = await Axios.get(`categorias/lu_estilo/?search=${formattedSearch}`)

  const categories = response.data as ICategory[]

  console.log(categories);
  
  return categories
}

export const StoreService = {
  fetchAllStores,
  fetchStoreDetails,
  fetchAllCategoriesFromStore,
  fetchAllCategoriesFromStoreBySearch
}
