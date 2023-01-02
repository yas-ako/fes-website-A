<template>
  <div class="nav">
    <!-- <ContentNavigation v-slot="{ navigation }">
      <div v-for="link of navigation" :key="link._path">
        <div v-for="link2 of link.children" :key="link2._path">
          <div v-for="link3 of link2.children" :key="link3._path">
            <NuxtLink :to="link3._path" class="main">{{ link3.title }}</NuxtLink>
            <div v-for="link4 of link3.children" :key="link4._path" class="sub">
              <NuxtLink :to="link4._path">{{ link4.title }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </ContentNavigation> -->
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped>
.nav {
  padding: 1.5rem;
  background-color: #ccddc2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main {
  display: block;
  margin: 5px 0;
  font-size: 1.2rem;
}

.sub {
  font-size: 0.8rem;
  padding-left: 10px;
}
</style>

<script setup>
const { data: navigationData } = await useAsyncData('navigation', () => fetchContentNavigation());
const data = navigationData[0];
</script>
