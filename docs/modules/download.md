# 下载分发（规划）

**状态：规划，无代码。**

官网下载按钮指向 **`huanale` 仓库的 GitHub Releases**，本仓不长期托管安装包二进制。

## 行为（规划）

| 平台 | 按钮 | 目标 |
|------|------|------|
| Windows | 主 CTA | Release 中的安装包（如 NSIS / `.exe`） |
| macOS | 次要或「即将推出」 | 有包后再链 Release |

- 优先使用「最新 Release」稳定 URL 模式；若不稳定再改为发布时写死版本并更新站点。
- 未代码签名 / 未公证时：诚实提示 SmartScreen（Windows）或 Gatekeeper（macOS）可能拦截。

## 国内镜像（后置）

大陆下载不稳时，再考虑 OSS/CDN 或 Gitee 等镜像；介绍页仍可留在 Pages。见 [hosting.md](./hosting.md)。
