<script setup lang="ts">
import type { ICategory } from '@/models/category'
import type { State } from '@/models/generic/state'
import Card from './Card.vue'

interface CategoryProps {
  category: ICategory
  loading: State
}

const props = defineProps<CategoryProps>()
</script>

<template>
  <div class="w-full flex flex-col gap-2 px-4">
    <div class="bodyNormalSemibold text-app-white-100">
      {{ category?.description }}
    </div>
    <!-- Grid onde vão ser colocar dos os cards de cada produto -->
    <div
      style="
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        grid-auto-flow: column;
        grid-auto-columns: minmax(180px, 1fr);
        overflow-x: auto;
      "
      :class="`grid-cols-[${category?.products.length}]`"
    >
      <Card v-for="product in category?.products" :product="product" />
      <!-- <Card v-for="product in category?.products" :product="product" /> -->
    </div>
  </div>
</template>
