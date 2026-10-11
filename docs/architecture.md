# 架构（规划）

**现状**：仓库仅有文档；站点代码与 Pages 流水线尚未落地。

## 分层（目标）

```
访客浏览器
  └─ Cloudflare Pages（本仓构建产物）
        ├─ 介绍 / 隐私文案（静态）
        └─ 下载按钮 → GitHub Releases（huanale）
```

- 本仓只产出**静态站点**（默认无 SSR、无账号 API）。
- 安装包**不**作为本仓大文件长期托管；指向桌面仓 Releases。
- 与桌面端「多设备同步 Cloudflare 回退（Workers/R2）」**分离**：Pages 不做同步。同步规划见 `huanale` 仓 `docs/modules/sync.md`。

## 仓库边界

| 仓库 | 职责 |
|------|------|
| [huanalesite](https://github.com/wljgit/huanalesite)（本仓） | 官网源码与本文档 |
| [huanale](https://github.com/wljgit/huanale) | 桌面应用；Releases 放安装包 |

Cloudflare Git 集成**只授权本仓**，避免构建环境拉取桌面应用源码。

## 托管与域名（规划）

| 项 | 选择 |
|----|------|
| 托管 | Cloudflare Pages |
| 默认 URL | `huanalesite.pages.dev`（以 Pages 项目名为准） |
| 自定义域名 | 可选；自行注册后在 Cloudflare DNS 接入 |
| 国内镜像 | 后置；有访问/下载痛点再加 OSS/CDN 等 |

## 有代码后的预期目录（规划）

无代码前仅约定，实现时再改本文：

- 站点源码根目录与构建输出以当时选定的静态栈为准（如 Astro / Vite）
- 文档始终在 `docs/`，约定在根目录 `CLAUDE.md`
