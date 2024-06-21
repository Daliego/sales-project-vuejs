<script setup lang="ts">
import type { IProduct } from '@/models/product'

interface CardProps {
  product: IProduct
}

const props = defineProps<CardProps>()
</script>

<template>
  <div @click="$router.push(`${$route.path}${product.id}`)" class="w-full h-100% gap-2">
    <img
      :src="product.images[0].image"
      class="w-full h-[66%] object-cover rounded-lg aspect-square"
    />
    <div class="flex flex-col w-full text-start">
      <div>{{ product.description }}</div>
    </div>
  </div>
</template>
