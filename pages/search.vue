<template>
  <Header />
  <div class="content-wrapper">
    <main class="main">
      <nav class="nav">
        <div class="nav-left">
          <NuxtLink to="/" class="arrowBack">
            <img src="/arrowBack.svg" alt="back">
            <span class="text-usual">Назад</span>
          </NuxtLink>
          <div class="search-box">
            <img src="/search.svg" alt="search">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Введите название секции"
              @keyup.enter="search"
              class="search-input"
            >
          </div>
        </div>
      </nav>
      
      <div class="main-content">
        <div class="main-section">
          <section v-if="searchResults.length">
            <div class="container">
              <h2 class="name-section">Результаты поиска</h2>
              <SportCard 
                v-for="result in searchResults" 
                :key="result.id" 
                :id="result.id"
                v-bind="result"
              />
            </div>
          </section>
          
          <section v-else-if="searchQuery.trim()">
            <div class="container">
              <h2 class="name-section">Ничего не найдено</h2>
              <p class="text-usual">Попробуйте другой запрос</p>
            </div>
          </section>
          
          <section v-else>
            <div class="container">
              <h2 class="name-section">Введите поисковый запрос</h2>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SportCard from '~/components/SportCard.vue'
import Header from '~/components/Header.vue'
import { allCards } from '~/data/sections.js'

const searchQuery = ref('')

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  
  const query = searchQuery.value.toLowerCase()
  return allCards.filter(card => 
    card.titleTop.toLowerCase().includes(query) ||
    card.tag.toLowerCase().includes(query) ||
    card.address.toLowerCase().includes(query)
  )
})
</script>