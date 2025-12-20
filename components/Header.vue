<template>
  <header class="header">
    <div class="logo">
      <div :class="['logo-img', logoType]"></div>
      <h1 class="text-logo">KidsConnect</h1>
    </div>
  </header>
</template>

<style scoped>
.logo-img {
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
}

.logo-img.default {
  background-image: url('/logo.svg');
}

.logo-img.alternative {
  background-image: url('/logoAlt.svg');
}
</style>