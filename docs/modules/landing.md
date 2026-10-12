# 落地页

**状态：已实现（阶段 1 壳）。**

对外主入口：讲清「花哪了」是什么，并给出下载行动点。

## 实现索引

| 项 | 路径 |
|----|------|
| 中文页 | `src/pages/index.astro` |
| 英文页 | `src/pages/en/index.astro` |
| 组装 | `src/components/HomePage.astro` |
| 导航品牌 | `src/components/SiteHeader.astro`（icon +「花哪了」，字体 D：ZCOOL XiaoWei） |
| 首屏 | `src/components/Hero.astro` |
| 功能 / 隐私 / FAQ / CTA | `Features` / `Privacy` / `Faq` / `CtaBand` |
| 文案 | `src/i18n/messages.ts` |
| 页脚 | `src/components/SiteFooter.astro`（产品栏 + 开源栏：GitHub / 文档=本仓 README / Releases / Issues） |
| 截图 | `public/screenshots/{zh,en}-{timeline,reports}.png`（中/英各两张，Hero 叠放） |
| Icon | `public/app-icon.png`（来自 `huanale` `src-tauri/icons`） |

## 范围

- 导航品牌：应用 icon +「花哪了」（当前字体 **D · 站酷小薇**；备选 A · Noto Sans SC Black）
- 一句价值主张 + 下载 CTA
- 产品预览用真实截图
- 页内介绍：能力、隐私边界、短 FAQ、页底再 CTA
- 中 / EN 分路径切换（`/` ↔ `/en/`）
- 气质参考 [omlx.ai](https://omlx.ai/)

## 不做

- 仪表盘式功能墙、统计条堆砌
- 在线试用、账号登录入口
- 假甘特时间线 / 假 UI 拼图
