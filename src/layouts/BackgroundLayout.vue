<template>
  <!-- <header class="teste">essa daqui cai ser red</header> -->
  <!-- <component :is="$route.meta.layout || 'div'"> -->
  <!-- <router-view /> -->
  <!-- </component> -->
  <div class="fullSpace">
    you are in the background layout page

    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundLayout'
}
</script>

<style scoped>



</style>
