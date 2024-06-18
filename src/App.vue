<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
  background-color: red;
}

#app {
  padding: 0;
  margin: 0;
}
</style>

<style scoped></style>
