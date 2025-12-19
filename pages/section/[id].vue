<template>
  <Header logo-type="alternative" />
  <div class="content-wrapper">
    <main class="main">
      <nav class="nav">
        <div class="nav-left">
          <NuxtLink to="/" class="arrowBack">
            <img src="/arrowBack.svg" alt="search">
            <span class="text-usual">Назад</span>
          </NuxtLink>
        </div>
        <div class="nav-right">
          <div class="map">
            <span class="text-usual">На карте</span>
            <img src="/location.svg" alt="location">
          </div>
        </div>
      </nav>
      
      <div class="main-content-new">
        <div class="main-section">
          <section>
            <div class="container">
              <h2 class="name-section">{{ section.titleTop }}{{ section.titleDown || '' }}</h2>
              <div class="main-inf-new">
                <div class="picture">
                  <img :src="section.image || '/picture.svg'" :alt="section.titleTop">
                </div>
                <div class="inf">
                  <div class="sport-type-section">
                    <div class="pricesNew">
                      <div v-if="section.join" :class="section.joinClass">{{ section.join }}</div>
                      <div :class="section.priceClass">{{ section.priceText }}</div>
                    </div>
                  </div>
                  <div class="description">
                    <div class="age">
                      <img src="/avatar.svg" alt="icon of person">
                      <span class="text-usual">{{ section.age }}</span>
                    </div>
                    <div class="address">
                      <img src="/address.svg" alt="icon of address">
                      <span class="text-usual">{{ section.address }}</span>
                    </div>
                    <div class="section-location">
                      <img src="/section-location.svg" alt="icon of location">
                      <a :href="section.sectionLink" class="text-usual-link">{{ section.sectionName }}</a>
                    </div>
                    <button class="button-more">
                        Записаться
                    </button>
                  </div>

                </div>
              </div>

              <div class="detailed-info">
                <div class="groups">
                  <div class="group-type-name">
                    <span class="group-top">ГРУППЫ</span>
                    <span class="group-down">Этап начальной подготовки</span>
                  </div>
                  <div class="age">
                    <img src="/teacher.svg" alt="icon of person">
                    <span class="text-usual">{{ groupInfo.teacher || 'Информация о тренере' }}</span>
                  </div>
                  <div class="address">
                    <img src="/students.svg" alt="icon of students">
                    <span class="text-usual">{{ groupInfo.students || 'Количество учеников' }}</span>
                  </div>
                  <div class="section-location">
                    <img src="/flag.svg" alt="icon of location">
                    <span class="text-usual">{{ groupInfo.flag || 'Время обучения' }}</span>
                  </div>
                </div>
                
                <div class="scheduleLessons">
                  <span class="group-top">РАСПИСАНИЕ ЗАНЯТИЙ</span>
                  <div class="data">
                    <img src="/data.svg" alt="icon of data">
                    <span class="text-usual">{{ section.scheduleDays }}</span>
                    <div v-for="(timeSlot, index) in section.timeSlots" :key="index" class="time">
                      <span class="text-time">{{ timeSlot }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="detailed-info">
                    <div class="groups">
                        <div class="group-type-name">
                            <span class="group-top">ОПИСАНИЕ</span>
                        </div>
                        <p class="text-usual">
                            {{ sectionDescription.text }}
                        </p>
                    </div>
                </div>

              <div class="detailed-info-level">
                <div class="groups">
                  <div class="program-top" @click="toggleProgram">
                    <div>
                      <span class="group-top">СОДЕРЖАНИЕ ПРОГРАММЫ</span>
                    </div>
                    <div>
                      <img :src="program.open ? '/arrowUpLevel.svg' : '/arrowDownLevel.svg'" alt="arrow">
                    </div>
                  </div>

                  <div v-if="program.open">
                    <div class="catalog-section">
                      <div class="upDown" @click="toggleLevel('basic')">
                        <div>
                          <span class="level-top">{{ program.levels.basic.title }}</span>
                        </div>
                        <div>
                          <img :src="program.levels.basic.open ? '/arrowUpLevel.svg' : '/arrowDownLevel.svg'" alt="arrow">
                        </div>
                      </div>

                      <div v-if="program.levels.basic.open" class="level-content">
                        <div v-for="(sectionItem, index) in program.levels.basic.sections" :key="index" class="level-section">
                          <div class="level-section-top">
                            {{ sectionItem.title }}, {{ sectionItem.hours }}
                          </div>
                          <ul class="list">
                            <li v-for="item in sectionItem.items" :key="item" class="list-items">
                              {{ item }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="catalog-section">
                      <div class="upDown" @click="toggleLevel('advanced')">
                        <div>
                          <span class="level-top">{{ program.levels.advanced.title }}</span>
                        </div>
                        <div>
                          <img :src="program.levels.advanced.open ? '/arrowUpLevel.svg' : '/arrowDownLevel.svg'" alt="arrow">
                        </div>
                      </div>

                      <div v-if="program.levels.advanced.open" class="level-content">
                        
                        <div v-for="(sectionItem, index) in program.levels.advanced.sections" :key="index" class="level-section">
                          <div class="level-section-top">
                            {{ sectionItem.title }}, {{ sectionItem.hours }}
                          </div>
                          <ul class="list">
                            <li v-for="item in sectionItem.items" :key="item" class="list-items">
                              {{ item }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
import { lightSports, strengthSports, martialArts, martialArtsSecond, martialArtsThird } from '~/data/sections.js'
import { lightSportsDescription } from '~/data/groups.js'
import { programContents } from '~/data/programs.js'
import { sectionDescriptions } from '~/data/descriptions.js'

const route = useRoute()
const sectionId = parseInt(route.params.id)

const allSections = [
  ...lightSports,
  ...strengthSports,
  ...martialArts,
  ...martialArtsSecond,
  ...martialArtsThird
]

const section = allSections.find(s => s.id === sectionId) || {}

const allDescriptions = [...lightSportsDescription]
const groupInfo = allDescriptions.find(d => d.id === sectionId) || {}

const sectionDescription = sectionDescriptions[sectionId] || {
  text: 'Здесь скоро появится описание'
}

const sectionProgram = programContents[sectionId] || {
  basic: {
    title: 'Базовый уровень',
    sections: [
      {
        title: 'Базовый уровень сложности',
        hours: 'часы',
        items: ['Здесь скоро появится программа']
      }
    ]
  },
  advanced: {
    title: 'Углубленный уровень',
    sections: [
      {
        title: 'Углубленный уровень сложности',
        hours: 'часы',
        items: ['Здесь скоро появится программа']
      }
    ]
  }
}

const program = reactive({
  open: false,
  levels: {
    basic: {
      open: false,
      title: sectionProgram.basic.title,
      sections: sectionProgram.basic.sections
    },
    advanced: {
      open: false,
      title: sectionProgram.advanced.title,
      sections: sectionProgram.advanced.sections
    }
  }
})

const toggleProgram = () => {
  program.open = !program.open
}

const toggleLevel = (key) => {
  program.levels[key].open = !program.levels[key].open
}
</script>