<template>
  <header class="header">
    <div class="logo">
      <img 
        v-if="logoType === 'default'"
        src="/assets/logo.svg" 
        alt="KidsConnect logo" 
        class="logo-img"
      >
      <img 
        v-else
        src="/logoAlt.svg" 
        alt="KidsConnect alternative logo" 
        class="logo-img"
      >
      <h1 class="text-logo">KidsConnect</h1>
    </div>
  </header>
</template>

<script setup>
defineProps({
  logoType: { type: String, default: 'default' }
})
</script>