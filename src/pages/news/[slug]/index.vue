<script setup lang="ts">

const route = useRoute();
const slug = String(route.params.slug);

const { data: article } = await useFetch(`/api/postDetail`, {
  params: { slug: slug },
});

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

</script>

<template>
  <div class="main">
    <span class="published">{{ $formatDate(article.publishedAt) }}</span>
    <span v-for="(tag, i) in article.tag" :key="tag.id" class="tag">{{ tag.name }}
    </span>
    <h1 class="title">{{ article.title }}</h1>
    <div class="md" v-html="article.text" />
  </div>
</template>