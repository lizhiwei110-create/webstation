# webstation

Vue 3 + Vite + TypeScript + Vue Router 前端 / Frontend for **webstation**.

## 环境 / Requirements

- Node.js 18+（推荐 20）
- npm 9+

## 安装 / Install

```bash
npm install
```

## 开发 / Dev

```bash
npm run dev
```

默认地址：http://localhost:5173

Vite 已将 `/api` 代理到后端 **http://localhost:8080**。也可通过 `.env` 中的 `VITE_API_BASE_URL` 直接指定 API 根地址。

## 构建 / Build

```bash
npm run build
```

产物在 `dist/`。预览：

```bash
npm run preview
```

## 后端说明 / Backend URL

| 用途 | 地址 |
|------|------|
| 后端服务 | http://localhost:8080 |
| 健康检查 | GET http://localhost:8080/api/health |
| 前端代理 | `/api` → `http://localhost:8080` |

请先启动 `webstation-back`，再在前端打开「Health」页验证联调。
