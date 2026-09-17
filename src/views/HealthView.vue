<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchHealth } from '../api/client'

const loading = ref(false)
const data = ref<unknown>(null)
const error = ref<string | null>(null)

async function load() {
  loading.value = true
  error.value = null
  data.value = null
  try {
    data.value = await fetchHealth()
  } catch (e) {
    error.value = e instanceof Error ? e.message : String(e)
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>

<template>
  <section class="page">
    <h1>Health 演示</h1>
    <p class="lead">请求 <code>GET /api/health</code>（经 Vite 代理或 <code>VITE_API_BASE_URL</code>）。</p>
    <button class="btn" type="button" :disabled="loading" @click="load">
      {{ loading ? '请求中…' : '重新请求' }}
    </button>

    <div v-if="loading" class="box muted">Loading…</div>
    <pre v-else-if="data" class="box ok">{{ JSON.stringify(data, null, 2) }}</pre>
    <pre v-else-if="error" class="box err">Error: {{ error }}</pre>

    <p class="hint">
      请先启动后端：<code>cd webstation-back && ./mvnw spring-boot:run</code>
    </p>
    <RouterLink to="/">← 返回首页</RouterLink>
  </section>
</template>

<style scoped>
.page {
  max-width: 640px;
}
.lead {
  color: var(--muted);
}
.btn {
  margin: 0.75rem 0 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.box {
  padding: 1rem;
  border-radius: 8px;
  overflow: auto;
  font-size: 0.9rem;
  line-height: 1.5;
}
.ok {
  background: #0f2a1a;
  color: #9ae6b4;
  border: 1px solid #276749;
}
.err {
  background: #2a1010;
  color: #feb2b2;
  border: 1px solid #c53030;
}
.muted {
  color: var(--muted);
}
.hint {
  margin-top: 1.25rem;
  color: var(--muted);
  font-size: 0.9rem;
}
a {
  color: var(--accent);
}
</style>
