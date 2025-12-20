<template>
  <header class="header">
    <div class="logo">
      <img :src="getLogoPath(logoType)" 
           alt="logo" 
           class="logo-img">
      <h1 class="text-logo">KidsConnect</h1>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  logoType: { type: String, default: 'default' }
})

const getLogoPath = (type) => {
  const filename = type === 'alternative' ? 'logoAlt.svg' : 'logo.svg'
   return '/kidsconnect.github.io/' + filename
}
</script>