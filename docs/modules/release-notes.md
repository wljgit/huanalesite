# Release notes 规范

面向本仓（`huanalesite`）GitHub Releases。安装包挂在这里；应用源码仍在私有仓 `huanale`。

## 发布元数据

| 项 | 约定 |
|----|------|
| Tag | **必填**，与 Title 不是同一栏。填 `vMAJOR.MINOR.PATCH`（如 `v0.1.0`）；可「发布时新建 tag」。Target 默认 `master`。打在本仓 commit 上即可，**不**表示应用源码 commit |
| Release title | `花哪了 X.Y.Z`（不要只用 `v0.1.0`；Title 填了不算选好 Tag） |
| Pre-release | 仅预览/测试包勾选；正式对外下不勾 |
| 附件（Assets） | 至少 Windows + macOS 各一份；文件名带版本与平台（如 `Huanale_0.1.0_x64-setup.exe`）。用户从本页下方下载 |

私有仓 `huanale` 可另打同名 tag，仅作源码里程碑；**用户下载只看本仓 Release**。

常见失败：`tag name can't be blank` → 左边 **Tag: Select tag** 仍为空，只写了 Title。

## 校验与签名（和 notes 的关系）

| 机制 | 谁负责 |
|------|--------|
| 文件 SHA256 | GitHub 对 Assets **自动**计算并展示；notes 里可不重复贴 |
| SmartScreen / Gatekeeper | **不会**因上传 Release 而自动通过；需自行代码签名（及 macOS 公证）。未做则在 notes「安装注意」里如实说明 |

## 正文结构（固定顺序）

**中英双语，同一篇里上下排列**：先中文全文，再 `---`，再英文全文（结构对齐）。不要只写中文 + 一段 English 摘要。

每侧各自包含：

1. **一句话** — 这版是什么（首发 / 修了什么 / 加了什么）
2. **一句下载指引** — 如「请从本页下方 Assets 下载」；**不要**再列具体文件名（Assets 区已有）
3. **此版本包含** / **What's included**（首发）或 **变更** / **Changes**（后续）— 用户可感知能力，不贴 commit 列表
4. **安装注意** / **Before you install** — 未签名/未公证、macOS Accessibility 等
5. **已知限制** / **Known limitations**（可选）
6. **反馈** / **Feedback**（可选）— Issues 即可；**不要**反复写官网链接（访客多半从官网进到本页）

## 文风

- 写给最终用户，不写内部模块名 / ADR / 私有仓路径
- 中英信息对等（可略有语序差异，勿一侧缺块）
- 首发用「包含什么」；后续版本写相对上一版的差量
- 安全与系统拦截要写清楚，避免「完全无感安装」的暗示
- 不要用 Generate release notes（基于本仓 commit）当正文；本仓 commit 与应用变更无关

## 检查清单

- [ ] 已选/新建 Tag（如 `v0.1.0`），Title 为 `花哪了 0.1.0`
- [ ] Win + Mac 已挂到 Assets，未登录可下载
- [ ] notes 中英齐全；未重复罗列文件名 / 官网
- [ ] 官网下载按钮仍指向 `releases/latest`（或已钉死资产 URL）
- [ ] README 安装区若仍写「即将提供」，发布后尽快改成可点的说明或链接
