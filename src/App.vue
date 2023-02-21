<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wel">
    <h1>Welcome to my webside</h1>
  </div>

  <div><router-view></router-view></div>
</template>

<style scoped>
.wel {
  display: flex;
  justify-content: center;
  justify-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
