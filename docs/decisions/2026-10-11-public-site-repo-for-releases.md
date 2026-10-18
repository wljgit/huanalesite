# ADR：公开 site 仓承载 Releases / Issues

- 日期：2026-10-11
- 状态：已采纳（修正 [2026-10-11-separate-site-repo-cloudflare-pages.md](./2026-10-11-separate-site-repo-cloudflare-pages.md) 中「安装包放 huanale」一条）

## 背景

桌面应用仓 `huanale` 为 Private，访客无法打开其 GitHub / Releases。官网若链过去等于死链。

## 决策

1. **`huanalesite` 设为 Public**：官网源码、Issues、Releases 对外入口。
2. **安装包发布到 `huanalesite` Releases**（不再要求访客访问 `huanale`）。
3. **`huanale` 继续 Private**，仅作应用开发仓；Cloudflare Pages 仍只连接本仓。

## 后果

- 需在发布流程里把构建产物上传到 site 仓 Releases（或从私有仓同步资产）。
- 官网文案与下载链接统一指向 `https://github.com/wljgit/huanalesite`。
