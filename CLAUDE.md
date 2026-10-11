# CLAUDE.md — 花哪了官网（huanalesite）协作约定

本文档约束所有 AI / 开发会话（含新开 session）。有冲突时以本文为准。

## 新会话先读

1. [docs/overview.md](docs/overview.md) — 站点范围与边界一页纸
2. 实施阶段：[docs/design/implementation-plan.md](docs/design/implementation-plan.md)
3. 改动相关模块短文：[docs/modules/](docs/modules/)（模块专属 ADR 放在该模块的 `decisions/` 下）
4. 需要托管 / 分发全貌时再读 [docs/architecture.md](docs/architecture.md)
5. 跨模块决策看 [docs/decisions/](docs/decisions/)；产品文案与版式细节才翻 [docs/design/](docs/design/)；**不要默认通读全仓库**

改功能时：同步更新对应 `docs/modules/*` 或 overview（实现索引以现状为准；无代码前以规划为准，并标明「规划」）。

## 产品边界（摘要）

- 本仓只做**花哪了桌面应用的介绍站 + 安装包下载入口**，不是 Web 版应用，也不是用户数据托管。
- 桌面应用源码在独立仓 **`huanale`**；本仓 **`huanalesite`** 不包含采集、同步、隐私密钥等应用逻辑。
- 托管默认 **Cloudflare Pages**；安装包主体在 **`huanale` 的 GitHub Releases**（国内镜像后置）。
- 官网 **不做** 用户注册、账号体系、活动数据上云；与桌面端「默认无账号、数据本机」一致。
- 免费介绍与下载不依赖自建应用服务器。

## 与桌面仓的关系

| 仓 | 内容 | Cloudflare Pages |
|----|------|------------------|
| `huanale` | Tauri 桌面应用 | **不**连接 |
| `huanalesite`（本仓） | 静态官网 | 只连接本仓 |

## TDD（测试驱动开发）

### 总原则

- **可单测的纯逻辑必须 TDD**（若从页面抽出：下载 URL 拼装、文案/版本映射、链接校验等）。先写失败测试 → 再写最小实现 → 再重构。
- **页面 / 布局 / 样式 / 纯展示：不强制 TDD**；可用手工或预览验证。

### 不强制 TDD

| 区域 | 示例 |
|------|------|
| 落地页与壳层 UI | 首屏、章节排版、CSS |
| 薄胶水 | 无分支的静态配置 |
| 一次性脚本 / 文档 | |

### 测试约定（有代码后）

- 前端纯逻辑：Vitest（`npm test`），若引入构建链
- 提交或宣称完成前：至少跑过本次改动相关的测试

有代码后的目录以 [docs/architecture.md](docs/architecture.md) 为准。
