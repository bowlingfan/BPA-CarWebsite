<script setup lang="ts">
  import { RouterView } from 'vue-router'
import router from './router';

  function GoToWeb() {
    router.push('/about');
  }

  function GoBack() {
    router.push('/');
  }
</script>

<template>
  <p @click="GoToWeb()">a</p>
  <p @click="GoBack()">b</p>
  <RouterView />
</template>