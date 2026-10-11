# 花哪了官网 — 总览（规划）

**花哪了**桌面应用的对外介绍站：讲清产品是什么、隐私边界、如何下载安装包。  
**不是**在浏览器里跑的应用；用户数据不经过本站。中英双语。

实现选型见 [architecture.md](./architecture.md)。**当前：Astro 静态站已落地；Pages 待连接。**

## 模块地图

| 模块 | 说明 |
|------|------|
| 落地页 | 首屏品牌、价值主张、主下载 CTA。见 [modules/landing.md](./modules/landing.md) |
| 隐私说明 | 本机优先、采集边界（不采剪贴板/截屏/键鼠内容等）。见 [modules/privacy-page.md](./modules/privacy-page.md) |
| 下载分发 | 链到本仓（Public）GitHub Releases；Windows / macOS 按钮。见 [modules/download.md](./modules/download.md) |
| 托管部署 | Cloudflare Pages 连接本仓；域名可选。见 [modules/hosting.md](./modules/hosting.md) |

## 数据与账号

| 数据 | 位置 |
|------|------|
| 官网静态资源 | Cloudflare Pages 构建产物 |
| 安装包二进制 | 本仓 `huanalesite` 的 GitHub Releases |
| 用户活动 / 设置 / 密钥 | **不在本站**；仅在桌面应用本机 |

本站无用户注册、无服务端会话。

## 文档怎么读

1. [CLAUDE.md](../CLAUDE.md) — 协作约定
2. 本文 + [architecture.md](./architecture.md) — 全局
3. 开工前看 [design/implementation-plan.md](./design/implementation-plan.md)
4. 改某模块 → [modules/](./modules/) 对应短文；文案/版式再看 [design/](./design/)
5. 桌面产品细节以 `huanale` 仓文档为准，本仓只索引、不复制实现细节
