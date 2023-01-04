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
    <template v-for="section in navigationData[0].children[0].children">
      <div class="main">
        <NuxtLink v-if="!section.children" :to="section._path">{{ section.title }}</NuxtLink>
        <div v-if="section.children">{{ section.title }}</div>
      </div>
      <template v-for="subsection in section.children">
        <div class="sub">
          <NuxtLink :to="subsection._path">{{ subsection.title }}</NuxtLink>
        </div>
      </template>
    </template>
    <!-- <pre>{{ navigationData[0].children[0].children }} </pre> -->
  </div>
</template>

<style scoped>
.nav {
  padding: 1.5rem;
  background-color: #fcf0fa;
  position: fixed;
  /* top: 0;
  left: 0; */
  width: 100%;
  /* ヘッダーの75px分 */
  height: calc(100% - 75px);
  overflow-x: hidden;
  overflow-y: scroll;
}

.main {
  display: block;
  margin: 12px 0;
  font-size: 1.2rem;
  font-weight: 700;
}

.sub {
  margin: 4px;
  font-size: 1.1rem;
  padding-left: 10px;
}
</style>

<script setup>
// const contentQuery = await queryContent('for-students', 'docs')
const { data: navigationData } = await useAsyncData('navigation', () => fetchContentNavigation());
const pageData = navigationData;
// const [prev, next] = await queryContent()
//   .only(['_path', 'title'])
//   .sort({ date: 1 })
//   .where({ isArchived: false })
//   .findSurround('/for-students/docs')
</script>
