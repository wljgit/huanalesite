# ADR：官网独立仓 + Cloudflare Pages

- 日期：2026-10-11
- 状态：已采纳

## 背景

需要为桌面应用「花哪了」建立介绍与下载入口。讨论过是否把站点放在 `huanale` 单仓的 `website/` 子目录。Cloudflare Pages 构建时会克隆所连接的整个仓库，不仅部署输出目录。

## 决策

1. **独立仓库** `huanalesite`（GitHub Private），与 `huanale` 并列。
2. **托管**：Cloudflare Pages，Git 集成**只授权本仓**。
3. **安装包**：仍由 `huanale` 的 GitHub Releases 分发；本站只做链接。
4. **本阶段先文档、后代码**（与桌面仓早期约定一致）。
5. 国内 CDN / ICP 镜像**后置**，不阻塞官网仓建立。

## 后果

- Cloudflare 构建环境看不到桌面应用源码。
- 下载 URL、产品事实需与 `huanale` 文档/Release 对齐，避免两仓文案长期漂移。
- 多维护一个仓库与一次 Pages 项目配置。
