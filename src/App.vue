<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="fullSpace">
    <component :is="$route.meta.layout || 'div'">
      <RouterView />
    </component>
  </main>
</template>

<style>
.fullSpace {
  width: 100vw;
  height: 100vh;
}
</style>

<style scoped></style>
