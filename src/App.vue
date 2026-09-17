<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <header class="header">
      <RouterLink class="brand" to="/">webstation</RouterLink>
      <nav>
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/health">Health</RouterLink>
      </nav>
    </header>
    <main class="main">
      <RouterView />
    </main>
    <footer class="footer">webstation · Vue 3 + Vite</footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.5rem;
  border-bottom: 1px solid var(--border);
  background: var(--panel);
}
.brand {
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--text);
  text-decoration: none;
}
nav {
  display: flex;
  gap: 1rem;
}
nav a {
  color: var(--muted);
  text-decoration: none;
}
nav a.router-link-active {
  color: var(--accent);
  font-weight: 600;
}
.main {
  flex: 1;
  padding: 2rem 1.5rem;
}
.footer {
  padding: 0.75rem 1.5rem;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.85rem;
}
</style>
