<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav class="navbar">
      <h1>Movie Review Site</h1>
      <div class="nav-links">
        <RouterLink to="/">Home</RouterLink>
      </div>
    </nav>

    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  color: #222;
}

a {
  text-decoration: none;
  color: inherit;
}

.navbar {
  background: #111;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>