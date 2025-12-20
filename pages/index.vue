<template>
  <Header logoType="default" />
  
  <div class="content-wrapper">
    <main class="main">
      <nav class="nav">
        <div class="nav-left">
          <NuxtLink to="/search" class="search">
              <img src="/search.svg" alt="search">
              <span class="text-red">Поиск</span>
          </NuxtLink>
          <div class="filter">
            <div 
              class="item" 
              :class="{ active: activeFilter === 'all' }"
              @click="activeFilter = 'all'">
              <span class="text-usual">Все</span>
            </div>
            <div 
              class="item-paid" 
              :class="{ active: activeFilter === 'paid' }"
              @click="activeFilter = 'paid'">
              <span class="text-usual">Платные</span>
            </div>
            <div 
              class="item-free" 
              :class="{ active: activeFilter === 'free' }"
              @click="activeFilter = 'free'">
              <span class="text-usual">Бесплатные</span>
            </div>
          </div>
        </div>
        <div class="nav-right">
          <div class="map">
            <span class="text-usual">На карте</span>
            <img src="/location.svg" alt="location">
          </div>
        </div>
      </nav>
      
      <div class="main-content">
        <div class="main-section">
          <section v-if="lightSportsFiltered.length">
            <div class="container">
              <h2 class="name-section">Лёгкая атлетика и гимнастика</h2>
              <SportCard 
                v-for="card in lightSportsFiltered" 
                :key="card.id" 
                :id="card.id"
                :show-join="false"
                v-bind="card" 
              />
            </div>
          </section>
          <section v-if="strengthSportsFiltered.length">
            <div class="container">
              <h2 class="name-section">Силовой спорт</h2>
              <SportCard 
                v-for="card in strengthSportsFiltered" 
                :key="card.id" 
                :id="card.id"
                :show-join="false"
                v-bind="card" 
              />
            </div>
          </section>

          <section v-if="martialMain.length">
            <div class="container">
              <h2 class="name-section">Единоборства</h2>
              <SportCard 
                v-for="card in martialMain" 
                :key="card.id" 
                :id="card.id"
                v-bind="card" />
            </div>
          </section>

          <section v-if="martialSecond.length">
            <div class="container">
              <h2 class="name-section">Единоборства</h2>
              <SportCard 
                v-for="card in martialSecond" 
                :key="card.id" 
                :id="card.id"
                v-bind="card" />
            </div>
          </section>

          <section v-if="martialThird.length">
            <div class="container">
              <h2 class="name-section">Единоборства</h2>
              <SportCard 
                v-for="card in martialThird" 
                :key="card.id" 
                :id="card.id"
                v-bind="card" />
            </div>
          </section>
        </div>
        
        <Filter @filter-change="handleFilterChange" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SportCard from '~/components/SportCard.vue'
import Filter from '~/components/Filter.vue'
import Header from '~/components/Header.vue'
import { lightSports, strengthSports, martialArts, martialArtsSecond, martialArtsThird } from '~/data/sections.js'

const activeFilter = ref('all') // 'all', 'paid', 'free'
const selectedAge = ref('')
const allCards = [
  ...lightSports,
  ...strengthSports,
  ...martialArts,
  ...martialArtsSecond,
  ...martialArtsThird
]

const handleFilterChange = (age) => {
  selectedAge.value = age
}

const filteredCards = computed(() => {
  let result = allCards
  
  if (activeFilter.value === 'free') {
    result = result.filter(card => card.priceText.includes('Бесплатно'))
  }
  if (activeFilter.value === 'paid') {
    result = result.filter(card => !card.priceText.includes('Бесплатно'))
  }
  
  if (selectedAge.value) {
    result = result.filter(card => card.age.includes(selectedAge.value))
  }
  
  return result
})

const lightSportsFiltered = computed(() => 
  filteredCards.value.filter(card => card.category === 'light')
)
const strengthSportsFiltered = computed(() => 
  filteredCards.value.filter(card => card.category === 'strength')
)
const martialMain = computed(() => 
  filteredCards.value.filter(card => card.category === 'martial' && card.subCategory === 'main')
)
const martialSecond = computed(() => 
  filteredCards.value.filter(card => card.category === 'martial' && card.subCategory === 'second')
)
const martialThird = computed(() => 
  filteredCards.value.filter(card => card.category === 'martial' && card.subCategory === 'third')
)
</script>