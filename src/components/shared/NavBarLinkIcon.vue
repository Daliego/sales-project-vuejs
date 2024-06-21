<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

interface NavBarLinkIconProps {
  //Path que eu ovu navegar quando clickado
  navigateTo: string
  //Path que eu estou atualmente
  presentPath: string
  text: string
  icon: string
}

const props = defineProps<NavBarLinkIconProps>()

const { presentPath, navigateTo, text, icon } = props

const isSelected = ref<boolean>(false)

watch(
  () => route.path,
  () => {
    isSelectedVerfication()
  }
)

const isSelectedVerfication = () => {
  if (route.path.match(navigateTo)) {
    isSelected.value = true
    return
  }

  isSelected.value = false
}

onMounted(() => {
  isSelectedVerfication()
})

const handleNavigate = () => {
  // if (navigateTo === '') {
  //
  //   router.push(presentPath)
  // }
  //
  // router.push(navigateTo + `/${route.params.slug}`)
  router.push(`/home/${route.params.slug}` + `${navigateTo}`)
}
</script>

<template>
  <div
    @click="handleNavigate"
    class="flex flex-col justify-center items-center"
    :class="isSelected ? 'text-app-primary-100' : 'opacity-50 text-app-text'"
  >
    <div v-html="icon" class="" />
    <div>{{ text }}</div>
  </div>
</template>

<style scoped>
.svg-image {
  color: black;
  fill: red;
}
</style>
