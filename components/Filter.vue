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
                <div 
                  class="arrow-icon" 
                  :class="{ 'arrow-up': categories.sport.open, 'arrow-down': !categories.sport.open }"
                  @click="toggleCatalog('sport')"
                ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.martial.open, 'arrow-down': !categories.martial.open }"
                      @click="toggleCatalog('martial')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.craft.open, 'arrow-down': !categories.craft.open }"
                      @click="toggleCatalog('craft')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.constructor.open, 'arrow-down': !categories.constructor.open }"
                      @click="toggleCatalog('constructor')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.word.open, 'arrow-down': !categories.word.open }"
                      @click="toggleCatalog('word')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.language.open, 'arrow-down': !categories.language.open }"
                      @click="toggleCatalog('language')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.intelligence.open, 'arrow-down': !categories.intelligence.open }"
                      @click="toggleCatalog('intelligence')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.information.open, 'arrow-down': !categories.information.open }"
                      @click="toggleCatalog('information')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.history.open, 'arrow-down': !categories.history.open }"
                      @click="toggleCatalog('history')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.pedagogy.open, 'arrow-down': !categories.pedagogy.open }"
                      @click="toggleCatalog('pedagogy')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.music.open, 'arrow-down': !categories.music.open }"
                      @click="toggleCatalog('music')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.song.open, 'arrow-down': !categories.song.open }"
                      @click="toggleCatalog('song')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.dance.open, 'arrow-down': !categories.dance.open }"
                      @click="toggleCatalog('dance')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.art.open, 'arrow-down': !categories.art.open }"
                      @click="toggleCatalog('art')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.fashion.open, 'arrow-down': !categories.fashion.open }"
                      @click="toggleCatalog('fashion')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.entertainment.open, 'arrow-down': !categories.entertainment.open }"
                      @click="toggleCatalog('entertainment')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.tourism.open, 'arrow-down': !categories.tourism.open }"
                      @click="toggleCatalog('tourism')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.nature.open, 'arrow-down': !categories.nature.open }"
                      @click="toggleCatalog('nature')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.people.open, 'arrow-down': !categories.people.open }"
                      @click="toggleCatalog('people')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.aesthetics.open, 'arrow-down': !categories.aesthetics.open }"
                      @click="toggleCatalog('aesthetics')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.technique.open, 'arrow-down': !categories.technique.open }"
                      @click="toggleCatalog('technique')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.team.open, 'arrow-down': !categories.team.open }"
                      @click="toggleCatalog('team')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.individual.open, 'arrow-down': !categories.individual.open }"
                      @click="toggleCatalog('individual')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.water.open, 'arrow-down': !categories.water.open }"
                      @click="toggleCatalog('water')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.gymnastics.open, 'arrow-down': !categories.gymnastics.open }"
                      @click="toggleCatalog('gymnastics')"
                    ></div>
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
                    <div 
                      class="arrow-icon" 
                      :class="{ 'arrow-up': categories.physical.open, 'arrow-down': !categories.physical.open }"
                      @click="toggleCatalog('physical')"
                    ></div>
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