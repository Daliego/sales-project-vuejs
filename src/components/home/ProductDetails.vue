<script setup lang="ts">



import type { DataState } from '@/models/generic/data_state';
import type { IProduct } from '@/models/product';
import type { ICategory } from '@/models/category';
import { StoreService } from '@/services/store_service';
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const store_slug = route.params.slug as string
const product_slug = route.params._slug as string


const dataProductsDetails = ref<DataState<ICategory[]>>({
  state: 'loading',
  data: null,
  error: null
})


  onMounted(async () => {
  StoreService.fetchAllCategoriesFromStoreBySearch(store_slug, product_slug)
    .then((response) => {
      dataProductsDetails.value = { state: 'success', data: response, error: null }
    })
    .catch((e) => {
      dataProductsDetails.value = { state: 'error', data: null, error: e }
    })
})
</script>

<template>
  <div>
    this is a product details page
    {{ $route.params._slug }}
  </div>
</template>
