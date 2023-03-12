<script setup lang="ts">
import { Post } from '../types/news'

type Props = {
  postdata: Post[];
}

const { postdata } = defineProps<Props>()

</script>

<template>
  <div>
    <article class="article" v-for="post in postdata" :key="post.id">
      <span class="published">{{ $formatDate(String(post.publishedAt)) }}</span>
      <span v-for="tag in post.tag" :key="tag.id" class="tag">{{ tag.name }}</span>
      <nuxt-link :to="`/news/${post.id}/`">
        <h1 class="title">
          {{ post.title }}
        </h1>
      </nuxt-link>
    </article>
  </div>
</template>