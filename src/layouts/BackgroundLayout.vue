<template>
  <div class="w-full h-full gradient">
    <slot />
  </div>
</template>

<!-- <script> -->
// export default {
//   name: 'BackgroundLayout'
// }
<!-- </script> -->

<style scoped>
.gradient {
  background: linear-gradient(#606c88, #3f4c6b);
}
</style>
