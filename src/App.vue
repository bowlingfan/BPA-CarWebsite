<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import router from './router';
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  .decor {
    font-family: 'Roboto', sans-serif;
    color: white;
    padding: 10px;
  }
</style>

<template>
  <nav>

  </nav>
  <RouterView />
</template>