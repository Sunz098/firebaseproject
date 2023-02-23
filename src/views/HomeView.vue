<script setup>
import LoginPage from "../components/LoginPage.vue";
</script>

<template>
  <header>
    <h1>Welcome to my webside</h1>
  </header>

  <h2>
    <div class="container">
      <LoginPage></LoginPage>
    </div>
  </h2>
</template>

<style scoped>
h2 {
  display: flex;
  justify-content: center;
  justify-items: center;
}

h1 {
  display: flex;
  justify-content: center;
  justify-items: center;
  margin-top: 20px;
}
</style>
