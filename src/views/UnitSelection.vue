<script setup lang="ts">
import CardSelection from '@/components/unitSelection/CardSelection.vue'
import { StoreService } from '@/services/store_service'
import { ref, onMounted } from 'vue'
import type { IStore } from '../models/store'
import type { DataState } from '@/models/generic/data_state'

const data = ref<DataState<IStore[]>>({ state: 'loading', data: null, error: null })

onMounted(async () => {
  StoreService.fetchAllStores()
    .then((response) => {
      data.value = { state: 'success', data: response, error: null }
    })
    .catch((e) => {
      data.value = { state: 'error', data: null, error: e }
    })
})
</script>

<template>
  <div class="w-full h-full flex flex-col items-center gap-3">
    <div class="w-full flex items-center logo mt-12">
      <img src="/logo.svg" />
    </div>
    <h2 class="heading2 mt-6 text-app-home-color text-app-background-100">
      Olá, seja <br />
      bem-vindo.
    </h2>
    <p class="bodyMediumRegular my-5">
      Antes de continuarmos, selecione uma de <br />
      nossas unidades.
    </p>

    <div v-if="data.error">Deu erro</div>
    <div v-if="data.state === 'loading'">Carregando...</div>

    <div v-if="data.state === 'success'" class="w-full flex flex-col gap-2">
      <CardSelection
        v-for="store in data.data"
        :on-click="() => $router.push('/home/' + store.slug)"
        :id="store.id"
        :key="store.id"
        :name="store.name"
        :street="store.street"
        :number="store.number"
      />
    </div>
  </div>
</template>

<style scoped>
.progressspinner.color {
  color: red;
}

.logo {
  width: 128px;
  height: 96px;
}
</style>
