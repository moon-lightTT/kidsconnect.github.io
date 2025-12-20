<template>
  <header class="header">
    <div class="logo">
      <img 
        :src="logoType === 'alternative' ? '/kidsconnect.github.io/logoAlt.svg' : '/kidsconnect.github.io/logo.svg'" 
        alt="logo" 
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