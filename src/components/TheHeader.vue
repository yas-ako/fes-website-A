<template>
  <header class="header">
    <div class="header_txt">
      <slot>みだし</slot>
    </div>
    <div class="icon_wrapper">
      <div class="icon material-icons md-48">menu</div>
    </div>
    <div class="navigation-items" @click="isOpen.value = !isOpen.value">
      <Transition name="slide-fade">
        <p v-if="show">hello</p>
      </Transition>
    </div>
  </header>
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

/* .navigation-items{

} */

/* .navigation-items {
} */
</style>

<!-- let isOpen = useState('isOpen', () => false) -->
<script setup>
// import { ref, reactive } from 'vue';
const isOpen = ref(true);
</script>
