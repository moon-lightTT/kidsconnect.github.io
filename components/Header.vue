<template>
  <header class="header">
    <div class="logo">
      <NuxtImg 
        :src="logoType === 'alternative' ? '/logoAlt.svg' : '/logo.svg'" 
        alt="logo" 
        class="logo-img"
        width="50"
        height="50"
      />
      <h1 class="text-logo">KidsConnect</h1>
    </div>
  </header>
</template>