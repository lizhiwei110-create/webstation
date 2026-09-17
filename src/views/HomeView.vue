<script setup lang="ts">
</script>

<template>
  <section class="page">
    <h1>Webstation</h1>
    <p class="lead">
      轻量前端工作站脚手架 · Vue 3 + Vite + TypeScript + Vue Router
    </p>
    <ul class="features">
      <li>开发代理：<code>/api</code> → <code>http://localhost:8080</code></li>
      <li>环境变量：<code>VITE_API_BASE_URL</code></li>
      <li>演示页：调用后端 <code>GET /api/health</code></li>
    </ul>
    <RouterLink class="btn" to="/health">打开健康检查演示</RouterLink>
  </section>
</template>

<style scoped>
.page {
  max-width: 640px;
}
.lead {
  color: var(--muted);
  line-height: 1.6;
}
.features {
  margin: 1.5rem 0;
  padding-left: 1.25rem;
  color: var(--muted);
  line-height: 1.8;
}
.features code {
  font-size: 0.9em;
}
.btn {
  display: inline-block;
  padding: 0.6rem 1.1rem;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}
.btn:hover {
  filter: brightness(1.08);
}
</style>
