<template>
  <div class="accordion-wrap">
    <div class="accordion-menu" @click="open()">
      <div class="title">カテゴリー</div>
      <transition name="rotate" mode="out-in">
      </transition>
    </div>
    <transition name="accordion">
      <div v-if="isOpen" class="text-wrap">
        <div>選択中のカテゴリー: {{ checkedCategories }}</div>
        <div class="accordion-textarea" v-for="user in userProfiles" :key="user.id">
          <label for="jack">{{ user.name }}</label>
          <input type="checkbox" :id="user.sin" :value="user.name" v-model="checkedCategories">
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
// data
const isOpen = ref(false);
const checkedCategories = ref([])
const userProfiles = reactive([
  { id: 1, name: "Beelzebub", sin: "glutonny" },
  { id: 2, name: "Asmodeus", sin: "lust" },
  { id: 3, name: "Mammon", sin: "greed" },
  { id: 4, name: "Satan", sin: "wrath" },
  { id: 5, name: "Astaroth", sin: "sloth" },
  { id: 6, name: "Lucifer", sin: "pride" },
  { id: 7, name: "Leviathan", sin: "envy" },
])

const open = () => {
  isOpen.value = !isOpen.value
};
</script>

<style scoped>
.accordion-wrap {
  width: 280px;
  height: 70px;
  margin: 16px 0px;
}

.accordion-wrap .accordion-menu {
  width: 100%;
  height: 28px;
  background-color: lightblue;
}

.accordion-wrap .accordion-menu:hover {
  opacity: 0.7;
  cursor: pointer;
}

.accordion-wrap .accordion-menu .title {
  padding: 4px 0 4px 8px;
  font-size: 16px;
}

.accordion-wrap .text-wrap {
  padding-top: 16px;
}

.accordion-wrap .text-wrap .accordion-textarea {
  padding-left: 8px;
  padding-top: 8px;
}

@keyframes accordion {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.accordion-enter-active {
  animation: accordion 0.5s;
}

.accordion-leave-active {
  animation: accordion 0.5s reverse;
}
</style>
