<template>
  <h1>学内向けのページ</h1>
  <ul>
    <li>
      <NuxtLink to="./docs/">ドキュメント</NuxtLink>
    </li>
    <li>
      <NuxtLink to="./dashboard/">代表者のページ</NuxtLink>
    </li>
    <li>
      <NuxtLink to="./schedules/">今後の予定</NuxtLink>
    </li>
  </ul>
</template>

<script setup>

// for-student にアクセスしたとき，for-student/にリダイレクトする．
definePageMeta({
  middleware: [
    function (to, from) {
      if (to.path == '/for-students') {
        return navigateTo('/for-students/')
      }
    }
  ],
})
</script>
