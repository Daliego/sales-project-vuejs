<script setup lang="ts">
import NavBar from '@/components/shared/NavBar.vue'
import { RouterView } from 'vue-router';
</script>
<template>
  <div class="w-full h-full gradient">
    <RouterView />
    <NavBar />
  </div>
</template>
