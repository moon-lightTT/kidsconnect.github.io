<template>
  <header class="header">
    <div class="logo">
      <!-- Просто обычный img с абсолютным путем -->
      <img 
        src="/logo.svg" 
        alt="logo" 
        class="logo-img"
        v-if="logoType === 'default'"
      >
      <img 
        src="/logoAlt.svg" 
        alt="logo" 
        class="logo-img"
        v-else
      >
      <h1 class="text-logo">KidsConnect</h1>
    </div>
  </header>
</template>