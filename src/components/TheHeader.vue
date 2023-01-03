<template>
  <header class="header">
    <div class="header_txt">
      <slot>みだし</slot>
    </div>
    <div class="icon_wrapper" @click="change()">
      <div class="icon material-icons md-48" v-if="!isOpen">menu</div>
      <div class="icon material-icons md-48" v-if="isOpen">close</div>
    </div>
  </header>
  <!-- <div class="navigation-items"> -->
    <Transition name="scroll" class="navigation-items">
      <div v-if="isOpen">
        <TheMenu></TheMenu>
      </div>
    </Transition>
  <!-- </div> -->

</template>

<style scoped>
.header {
  /* position: fixed; */
  height: 75px;
  width: 100%;
  background-color: #ffd4ef;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.header_txt {
  font-size: 1.8rem;
  display: flex;
  align-items: center;
}

.icon_wrapper {
  z-index: 10;
  height: 100%;
  margin: auto 0;
  display: flex;
  align-items: center;
}

.icon {
  user-select: none;
  font-size: 1.8rem;
  cursor: pointer;
}

.open {
  position: absolute;
  display: block;
}

.navigation-items {
  position: fixed;
  /* position: absolute; */
  height: 100%;
  width: 100%;
  /* z-index: -5; */
  /* animation-duration: 0.3s; */
  /* animation-fill-mode: both; */
}

.scroll-enter-from {
  transform: translateX(100%);
  height: 100%;
  width: 100%;
}

.scroll-enter-to {
  opacity: 1;
  transform: translateX(0);
  height: 100%;
  width: 100%;
}

.scroll-enter-active {
  transition: all 0.4s ease;
}

.scroll-leave-from {
  height: 100%;
  width: 100%;
  transform: translateX(0);
}

.scroll-leave-to {
  height: 100%;
  width: 100%;
  transform: translateX(100%);
}

.scroll-leave-active {
  /* transition: all 2s; */
  transition: all 0.4s ease;
}
</style>

<!-- let isOpen = useState('isOpen', () => false) -->
<script setup  lang="ts">
// import { ref, reactive } from 'vue';
const isOpen = ref(false);
const change = () => {
  isOpen.value = !isOpen.value
};
</script>
