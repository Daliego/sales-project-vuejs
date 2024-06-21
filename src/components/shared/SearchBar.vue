<script setup lang="ts">
import type { DataState } from '@/models/generic/data_state'
import type { ICategory } from '@/models/category'
import { computed, ref } from 'vue'
import { StoreService } from '@/services/store_service'
import { useRoute } from 'vue-router'

const route = useRoute()

const searchText = ref<string>('')

interface SearchBarProps {
  onSearch: (text: string) => void
}
const props = defineProps<SearchBarProps>()

const isSearching = computed(() => {
  return searchText.value !== '' ? true : false
})

const handleEnter = (e: KeyboardEvent) => {
  console.log('here')
  console.log(e)

  if (!isSearching) {
    return
  }

  if (e.key === 'Enter') {
    props.onSearch(searchText.value)
  }
}
</script>

<template>
  <div
    class="flex w-full justify-start border-2 rounded-lg bg-app-white font-poppins gap-6 px-4 py-2 items-center text-black"
    :class="isSearching ? 'border-app-secondary-100' : 'border-app-white'"
  >
    <div>
      <img src="/basic/search.svg" width="24" height="24" />
    </div>
    <input
      v-model="searchText"
      placeholder="Search"
      class="py-[6px] border-transparent focus:border-transparent focus:ring-0"
      @keypress="handleEnter"
    />
  </div>
</template>

<!-- //styleName: Desktop / Text Small; -->
<!-- font-family: Poppins;
font-size: 16px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0.75px;
text-align: left; -->
