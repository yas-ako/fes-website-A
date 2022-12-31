<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

watchEffect(() => {
  if (user.value) {
    navigateTo('/index')
  }
})

async function signInWithTwitter() {
  const { data, error } = await auth.signInWithOAuth({
    provider: 'twitter',
  })
}

</script>


<template>
  <div class="button" @click="signInWithTwitter()">
    ログイン
  </div>
</template>


<style>
.button {
  width: 100px;
  margin: 5px;
  padding: 5px;
  background-color: #cc66cc;
  cursor: pointer;
}
</style>