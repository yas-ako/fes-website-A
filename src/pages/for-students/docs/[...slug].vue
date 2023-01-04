<template>
  <div>
    <!-- <ContentNavigation v-slot="{ navigation }" path="/for-students/docs">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          <ul>
            <li v-for="link2 of link.children" :key="link2._path">
              <NuxtLink :to="link2._path">{{ link2.title }}</NuxtLink>
              <ul>
                <li v-for="link3 of link2.children" :key="link3._path">
                  <NuxtLink :to="link3._path">{{ link3.title }}</NuxtLink>
                  <ul>
                    <li v-for="link4 of link3.children" :key="link4._path">
                      <NuxtLink :to="link4._path">{{ link4.title }}</NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </ContentNavigation>
    <ContentNavigation v-slot="{ navigation }" path="/for-students/docs">
      <div>
        <div v-for="link of navigation" :key="link._path">
          <div>
            <div v-for="link2 of link.children" :key="link2._path">
              <NuxtLink :to="link2._path">{{ link2.title }}</NuxtLink>
              <div>
                <div v-for="link3 of link2.children" :key="link3._path">
                  {{ link3.title }}
                  <div>
                    <div v-for="link4 of link3.children" :key="link4._path">
                      <NuxtLink :to="link4._path">{{ link4.title }}</NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentNavigation> -->
    <!-- <ContentNavigation path="/for-students">
    </ContentNavigation> -->





    <ContentDoc>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
      <template #empty>
        <h1>Document is empty</h1>
      </template>
    </ContentDoc>


    <!-- <template> -->
    <!-- <pre>{{ navigationData }}</pre> -->
    <!-- </template> -->
  </div>
</template>

<script setup>
const { data: navigationData } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<style scoped>

</style>