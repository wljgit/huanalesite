# 架构

**现状**：Astro 静态站已落地；Cloudflare Pages 待连接本仓。

## 分层

```
访客浏览器
  └─ Cloudflare Pages（本仓 `astro build` 产物 → `dist/`）
        ├─ 介绍 / 隐私文案（静态，中 / EN）
        └─ 下载按钮 → 本仓 GitHub Releases（Public）
```

- 本仓产出**静态站点**，并以 **Public Releases** 分发安装包（二进制不进 git 树）。
- 与桌面端「多设备同步 Cloudflare 回退（Workers/R2）」**分离**：Pages 不做同步。同步规划见 `huanale` 仓 `docs/modules/sync.md`。

## 仓库边界

| 仓库 | 职责 |
|------|------|
| [huanalesite](https://github.com/wljgit/huanalesite)（本仓，Public） | 官网、Issues、安装包 Releases |
| `huanale`（Private） | 桌面应用源码 |

Cloudflare Git 集成**只授权本仓**，避免构建环境拉取桌面应用源码。

## 托管与域名（规划）

| 项 | 选择 |
|----|------|
| 托管 | Cloudflare Pages |
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| 默认 URL | `huanalesite.pages.dev`（以 Pages 项目名为准） |
| 自定义域名 | 可选；自行注册后在 Cloudflare DNS 接入 |
| 国内镜像 | 后置；有访问/下载痛点再加 OSS/CDN 等 |

## 目录（实现）

| 路径 | 说明 |
|------|------|
| `src/pages/` | 路由：`/` 中文，`/en/` 英文 |
| `src/components/` | 落地页区块 |
| `src/i18n/messages.ts` | 中英文字案 |
| `src/lib/` | 下载 URL、locale 纯逻辑（Vitest） |
| `public/` | icon、真实应用截图、favicon |
| `docs/` | 文档与协作约定 |
| `CLAUDE.md` | 会话约定 |

本地：`npm run dev` / `npm test` / `npm run build`。
