<script setup lang="ts">
import type { DataState, DataStateUninitialized } from '@/models/generic/data_state'
import type { IStoreDetails } from '@/models/store_details'
import type { ICategory } from '@/models/category'
import { StoreService } from '@/services/store_service'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SearchBar from '@/components/shared/SearchBar.vue'
import Category from '@/components/home/Category.vue'
import NotFoundSearchError from '@/components/shared/errors/NotFoundSearchError.vue'

const dataStoreDetails = ref<DataState<IStoreDetails>>({
  state: 'loading',
  data: null,
  error: null
})
const dataStoreCategories = ref<DataState<ICategory[]>>({
  state: 'loading',
  data: null,
  error: null
})
const dataStoreSearchedCategories = ref<DataStateUninitialized<ICategory[]>>({
  state: 'uninitialized',
  data: null,
  error: null
})

const route = useRoute()

const slug = route.params.slug as string

onMounted(async () => {
  StoreService.fetchStoreDetails(slug)
    .then((response) => {
      dataStoreDetails.value = { state: 'success', data: response, error: null }
    })
    .catch((e) => {
      dataStoreDetails.value = { state: 'error', data: null, error: e }
    })

  StoreService.fetchAllCategoriesFromStore(slug)
    .then((response) => {
      dataStoreCategories.value = { state: 'success', data: response, error: null }
    })
    .catch((e) => {
      dataStoreCategories.value = { state: 'error', data: null, error: e }
    })
})

const handleSearch = (text: string) => {
  dataStoreCategories.value.state = 'loading'
  StoreService.fetchAllCategoriesFromStoreBySearch(slug, text)
    .then((response) => {
      dataStoreCategories.value = { state: 'success', data: response, error: null }
    })
    .catch((e) => {
      dataStoreSearchedCategories.value = { state: 'error', data: null, error: e }
    })
}

</script>

<template>
  <div class="w-full h-full flex flex-col gap-6 font-poppins">
    <div class="w-full h-[25%]">
      <img class="w-full h-full object-fill" :src="dataStoreDetails.data?.banner" />
    </div>
    <div class="px-4">
      <SearchBar :onSearch="handleSearch" />
    </div>

    <!-- Categories Section -->
    <div class="w-full h-full overflow-y-auto">
      <div v-if="dataStoreCategories.state === 'loading'">Loading...</div>
      <div v-if="dataStoreCategories.state === 'error'">Sorry something went wrong</div>
      <div class="w-full h-full" v-if="dataStoreCategories.state === 'success'">
        <!-- <NotFoundSearchError v-if="dataStoreCategories.data.length === 0" /> -->
        <Category
          v-for="category in dataStoreCategories.data"
          :category="category"
          :loading="dataStoreCategories.state"
        />
        <Category
          v-for="category in dataStoreCategories.data"
          :category="category"
          :loading="dataStoreCategories.state"
        />
        <Category
          v-for="category in dataStoreCategories.data"
          :category="category"
          :loading="dataStoreCategories.state"
        />
      </div>
    </div>
  </div>
</template>
