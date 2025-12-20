<template>
  <div class="main-inf">
    <div class="picture">
      <div :class="['section-image', `section-${id}`]"></div>
    </div>
    <div class="inf">
      <div class="sport-type">
        <h3 class="sport-type-name">
          <span class="top"> {{ titleTop }} </span>
          <span class="down"> {{ titleDown }} </span>
        </h3>
        <div class="prices">
             <span v-if="showJoin && join" :class="joinClass">{{ join }}</span>
            <span :class="priceClassLes">{{ priceLes }}</span>
            <span :class="priceClass">{{ priceText }}</span>
        </div>
      </div>
      <div class="description">
        <span class="text-red">{{ tag }}</span>
        <div class="age">
          <img src="/avatar.svg" alt="icon of person">
          <span class="text-usual">{{ age }}</span>
        </div>
        <div class="address">
          <img src="/address.svg" alt="icon of address">
          <span class="text-usual">{{ address }}</span>
        </div>
        <div class="section-location">
          <img src="/section-location.svg" alt="icon of location">
          <a :href="sectionLink" class="text-usual-link">{{ sectionName }}</a>
        </div>
        <div class="inf-bottom">
          <div class="data">
            <img src="/data.svg" alt="icon of data">
            <span class="text-usual">{{ scheduleDays }}</span>
            <div v-for="(timeSlot, index) in timeSlots" :key="index" class="time">
              <span class="text-time">{{ timeSlot }}</span>
            </div>
            <NuxtLink :to="`/section/${id}`" class="button-more">
              Подробнее
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  titleTop: String,
  titleDown: String,
  showJoin: { type: Boolean, default: false },
  join: String,
  joinClass: String,
  priceLes: String,
  priceClassLes: String,
  priceText: String,
  priceClass: String,
  tag: String,
  age: String,
  image: { type: String, default: '/picture.svg' },
  address: String,
  sectionName: String,
  sectionLink: String,
  scheduleDays: String,
  timeSlots: Array
})
</script>