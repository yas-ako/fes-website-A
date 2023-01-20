<script setup lang="ts">

const { data: posts } = await useFetch('/api/postList')

</script>


<template>
  <div>
      <div class="divider">
          <section class="container">
              <!-- 記事一覧 -->
              <PostList :postdata="posts.contents" />
          </section>
          <aside class="aside">
              <!-- キーワード検索、タグ一覧 -->
          </aside>
      </div>
  </div>
</template>
