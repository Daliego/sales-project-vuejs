<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

interface CardProps {
  id: number
  name: string
  street: string
  number: number
  onClick: () => void
}

const { id, name, street, number } = defineProps<CardProps>()
</script>

<template>
  <div @click="onClick" class="w-full flex justify-center">
    <div class="w-[95%] flex justify-between items-center bg-app-white rounded-[8px] p-2 px-4">
      <div class="flex items-center gap-5">
        <div><img src="/basic/coolicon.svg" /></div>
        <div class="flex flex-col justify-center">
          <div class="bodyMediumSemibold text-app-text">{{ name }}</div>
          <div class="bodySmallRegular text-app-text-100">
            {{ `${street}, ${number}` }}
          </div>
        </div>
      </div>
      <div><img src="/basic/right_content.svg" /></div>
    </div>
  </div>
</template>
