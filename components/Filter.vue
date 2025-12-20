<template>
  <div class="aside">
    <h2 class="name-section">Фильтры</h2>
    <div class="main-aside">
      <div class="age-filter-first">
        <span class="name-filter">Возраст</span>
        <select class="age-filter" v-model="selectedAge">
          <option value="">Любой</option>
          <option value="6-18">6-18 лет</option>
          <option value="10-18">10-18 лет</option>
        </select>
      </div>
      
      <div class="gender">
        <span class="name-filter">Пол</span>
        <div class="male-female">
          <div class="checkbox-item">
            <input type="checkbox" id="male" v-model="genders.male">
            <label for="male">Мужской</label>
          </div>
          <div class="checkbox-item">
            <input type="checkbox" id="female" v-model="genders.female">
            <label for="female">Женский</label>
          </div>
        </div>
      </div>
      
      <div class="catalog">
        <span class="name-filter">Каталог</span>
        <div class="catalog-section">
            <div class="upDown"> 
                <span class="span-list" @click="toggleCatalog('sport')">
                Силовой спорт
                    <span v-if="categories.sport.items.length > 0" class="item-count">
                        {{ categories.sport.items.length }}
                    </span>
                </span>
                <svg width="12" height="8" :style="{transform: categories.sport.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('sport')">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                </svg>
            </div>
            <ul v-if="categories.sport.open" class="list">
                <li v-for="item in categories.sport.items" :key="item" class="list-items">
                {{ item }}
                </li>
            </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('martial')">
                    Единоборства
                    <span v-if="categories.martial.items.length > 0" class="item-count">
                    {{ categories.martial.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.martial.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('martial')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.martial.open" class="list">
                    <li v-for="item in categories.martial.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('craft')">
                    ДПИ и ремесла
                    <span v-if="categories.craft.items.length > 0" class="item-count">
                    {{ categories.craft.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.craft.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('craft')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.craft.open" class="list">
                    <li v-for="item in categories.craft.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('constructor')">
                    Техническое конструирование
                    <span v-if="categories.constructor.items.length > 0" class="item-count">
                    {{ categories.constructor.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.constructor.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('constructor')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.constructor.open" class="list">
                    <li v-for="item in categories.constructor.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('word')">
                    Словесность
                    <span v-if="categories.word.items.length > 0" class="item-count">
                    {{ categories.word.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.word.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('word')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.word.open" class="list">
                    <li v-for="item in categories.word.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('language')">
                    Иностранные языки
                    <span v-if="categories.language.items.length > 0" class="item-count">
                    {{ categories.language.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.language.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('language')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.language.open" class="list">
                    <li v-for="item in categories.language.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('intelligence')">
                    Развитие интеллекта
                    <span v-if="categories.intelligence.items.length > 0" class="item-count">
                    {{ categories.intelligence.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.intelligence.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('intelligence')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.intelligence.open" class="list">
                    <li v-for="item in categories.intelligence.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('information')">
                    Информационные технологии
                    <span v-if="categories.information.items.length > 0" class="item-count">
                    {{ categories.information.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.information.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('information')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.information.open" class="list">
                    <li v-for="item in categories.information.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('history')">
                    История и Традиции
                    <span v-if="categories.history.items.length > 0" class="item-count">
                    {{ categories.history.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.history.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('history')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.history.open" class="list">
                    <li v-for="item in categories.history.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('pedagogy')">
                    Педагогика
                    <span v-if="categories.pedagogy.items.length > 0" class="item-count">
                    {{ categories.pedagogy.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.pedagogy.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('pedagogy')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.pedagogy.open" class="list">
                    <li v-for="item in categories.pedagogy.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('music')">
                    Музыка и звук
                    <span v-if="categories.music.items.length > 0" class="item-count">
                    {{ categories.music.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.music.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('music')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.music.open" class="list">
                    <li v-for="item in categories.music.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('song')">
                    Пение
                    <span v-if="categories.song.items.length > 0" class="item-count">
                    {{ categories.song.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.song.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('song')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.song.open" class="list">
                    <li v-for="item in categories.song.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('dance')">
                    Хореография (танцы)
                    <span v-if="categories.dance.items.length > 0" class="item-count">
                    {{ categories.dance.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.dance.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('dance')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.dance.open" class="list">
                    <li v-for="item in categories.dance.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('art')">
                    Зрелищные искусства
                    <span v-if="categories.art.items.length > 0" class="item-count">
                    {{ categories.art.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.art.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('art')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.art.open" class="list">
                    <li v-for="item in categories.art.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('fashion')">
                    Мода и стиль
                    <span v-if="categories.fashion.items.length > 0" class="item-count">
                    {{ categories.fashion.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.fashion.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('fashion')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.fashion.open" class="list">
                    <li v-for="item in categories.fashion.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('entertainment')">
                    Познавательные развлечения
                    <span v-if="categories.entertainment.items.length > 0" class="item-count">
                    {{ categories.entertainment.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.entertainment.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('entertainment')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.entertainment.open" class="list">
                    <li v-for="item in categories.entertainment.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('tourism')">
                    Туризм
                    <span v-if="categories.tourism.items.length > 0" class="item-count">
                    {{ categories.tourism.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.tourism.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('tourism')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.tourism.open" class="list">
                    <li v-for="item in categories.tourism.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('nature')">
                    Естественные науки
                    <span v-if="categories.nature.items.length > 0" class="item-count">
                    {{ categories.nature.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.nature.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('nature')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.nature.open" class="list">
                    <li v-for="item in categories.nature.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('people')">
                    Люди и животные
                    <span v-if="categories.people.items.length > 0" class="item-count">
                    {{ categories.people.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.people.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('people')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.people.open" class="list">
                    <li v-for="item in categories.people.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('aesthetics')">
                    Эстетические виды спорта
                    <span v-if="categories.aesthetics.items.length > 0" class="item-count">
                    {{ categories.aesthetics.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.aesthetics.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('aesthetics')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.aesthetics.open" class="list">
                    <li v-for="item in categories.aesthetics.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('technique')">
                    Технические виды спорта
                    <span v-if="categories.technique.items.length > 0" class="item-count">
                    {{ categories.technique.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.technique.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('technique')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.technique.open" class="list">
                    <li v-for="item in categories.technique.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('team')">
                    Командно-игровой спорт
                    <span v-if="categories.team.items.length > 0" class="item-count">
                    {{ categories.team.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.team.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('team')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.team.open" class="list">
                    <li v-for="item in categories.team.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('individual')">
                    Индивидуально игровой спорт
                    <span v-if="categories.individual.items.length > 0" class="item-count">
                    {{ categories.individual.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.individual.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('individual')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.individual.open" class="list">
                    <li v-for="item in categories.individual.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('water')">
                    Водные виды спорта
                    <span v-if="categories.water.items.length > 0" class="item-count">
                    {{ categories.water.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.water.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('water')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.water.open" class="list">
                    <li v-for="item in categories.water.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('gymnastics')">
                    Лёгкая атлетика и гимнастика
                    <span v-if="categories.gymnastics.items.length > 0" class="item-count">
                    {{ categories.gymnastics.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.gymnastics.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('gymnastics')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.gymnastics.open" class="list">
                    <li v-for="item in categories.gymnastics.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        <div class="catalog-section">
                <div class="upDown"> 
                    <span class="span-list" @click="toggleCatalog('physical')">
                    Физкультура
                    <span v-if="categories.physical.items.length > 0" class="item-count">
                    {{ categories.physical.items.length }}
                    </span>
                    </span>
                    <svg width="12" height="8" :style="{transform: categories.physical.open ? 'rotate(0deg)' : 'rotate(180deg)'}" @click="toggleCatalog('physical')">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <ul v-if="categories.physical.open" class="list">
                    <li v-for="item in categories.physical.items" :key="item" class="list-items">
                    {{ item }}
                    </li>
                </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

const selectedAge = ref('')
const emit = defineEmits(['filter-change'])

watch(selectedAge, (newAge) => {
  emit('filter-change', newAge)
})

const genders = reactive({ male: false, female: false })
const categories = reactive({
  sport: { open: false, items: ['Тяжелая атлетика', 'Пауэрлифтинг'] },
  martial: { open: false, items: ['Вольная борьба', 'Дзюдо'] },
  craft: { open: false, items: [] },
  constructor: { open: false, items: [] },
  word: { open: false, items: [] },
  language: { open: false, items: [] },
  intelligence: { open: false, items: [] },
  information: { open: false, items: [] },
  history: { open: false, items: [] },
  pedagogy: { open: false, items: [] },
  music: { open: false, items: [] },
  song: { open: false, items: [] },
  dance: { open: false, items: [] },
  art: { open: false, items: [] },
  fashion: { open: false, items: [] },
  entertainment: { open: false, items: [] },
  tourism: { open: false, items: [] },
  nature: { open: false, items: [] },
  people: { open: false, items: [] },
  aesthetics: { open: false, items: [] },
  technique: { open: false, items: [] },
  team: { open: false, items: [] },
  individual: { open: false, items: [] },
  water: { open: false, items: [] },
  gymnastics: { open: false, items: ['Лёгкая атлетика'] },
  physical: { open: false, items: [] },
})

const toggleCatalog = (key) => {
  categories[key].open = !categories[key].open
}

</script>