# 下载分发

**状态：下载入口指向本仓（`huanalesite`）公开 Releases；平台资产 URL 可再钉死。**

实现：`src/lib/download.ts`（Vitest）。

## 行为

| 平台 | 按钮 | 目标 |
|------|------|------|
| Windows | 主 CTA | 本仓 `releases/latest`（随后可钉 `.exe` 资产） |
| macOS | 并列 CTA | 同上（随后可钉 `.dmg` 等资产） |

- 对外 GitHub / Issues / Releases **只使用公开仓** [huanalesite](https://github.com/wljgit/huanalesite)。桌面应用源码仓 `huanale` 保持 private，不链给访客。
- 未代码签名 / 未公证时：诚实提示 SmartScreen（Windows）或 Gatekeeper（macOS）可能拦截。
- 发版文案与检查清单见 [release-notes.md](./release-notes.md)。

## 国内镜像（后置）

大陆下载不稳时，再考虑 OSS/CDN 或 Gitee 等镜像；介绍页仍可留在 Pages。见 [hosting.md](./hosting.md)。
