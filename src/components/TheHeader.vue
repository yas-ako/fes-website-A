<template>
  <header class="header">
    <div class="header_txt">
      <slot>みだし</slot>
    </div>
    <div class="icon_wrapper" @click="change()">
      <div class="icon material-icons md-48">menu</div>
    </div>
  </header>
  <div class="navigation-items">
    <Transition name="scroll">
      <p v-if="isOpen">
        <TheMenu></TheMenu>
      </p>
    </Transition>
  </div>
</template>

<style scoped>
.header {
  /* height: 60px; */
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
  font-size: 1.8rem;
  cursor: pointer;
}

.open {
  position: absolute;
  display: block;
}

.navigation-items {
  position: fixed;
}

.scroll-enter-to {
  transition: transform 1.3s ease-out;
  transform: translateX(0px);
}
.scroll-enter-from {
  transform: translateX(-100px);
}

.scroll-leave-to {
  transition: transform 1.3s ease-out;
  transform: translateX(-100px);
}
.scroll-leave-from {
  transform: translateX(0px);
}
</style>

<!-- let isOpen = useState('isOpen', () => false) -->
<script setup>
// import { ref, reactive } from 'vue';
const isOpen = ref(true);
const change = () => {
  isOpen.value = !isOpen.value
};
</script>
