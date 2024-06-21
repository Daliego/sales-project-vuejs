<script setup lang="ts">
import NavBarLinkIcon from './NavBarLinkIcon.vue'
import { useRoute } from 'vue-router'
const router = useRoute()
const path = router.path

import HomeIcon from '../../assets/icons/home_outlined.svg?raw'
import AccountIcon from '../../assets/icons/user.svg?raw'
import ShooppingCartIcon from '@/assets/icons/shopping-cart.svg?raw'
</script>

<template>
  <div class="w-full h-[7.7%] fixed bottom-0 flex justify-between p-5 bg-app-white">
    <NavBarLinkIcon
      navigate-to="/"
      :present-path="path"
      text="Página inicial"
      :icon="HomeIcon"
    />
    <NavBarLinkIcon
      navigate-to="/shopping-cart"
      :present-path="path"
      text="Carrinho"
      :icon="ShooppingCartIcon"
    />
    <NavBarLinkIcon
      navigate-to="/account"
      :present-path="path"
      text="Minha conta"
      :icon="AccountIcon"
    />
  </div>
</template>
