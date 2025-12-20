<template>
  <header class="header">
    <div class="logo">
      <img :src="currentLogo" 
           alt="logo" 
           class="logo-img">
      <h1 class="text-logo">KidsConnect</h1>
    </div>
  </header>
</template>

<script setup>
import logoDefault from '~/public/logo.svg'
import logoAlt from '~/public/logoAlt.svg'

const props = defineProps({
  logoType: { type: String, default: 'default' }
})
const currentLogo = computed(() => {
  return props.logoType === 'alternative' ? logoAlt : logoDefault
})
</script>