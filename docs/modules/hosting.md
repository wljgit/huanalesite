# 托管部署（规划）

**状态：规划，无代码；Pages 项目尚未创建。**

## 目标形态

1. GitHub 私有仓 **`huanalesite`**（本仓）
2. Cloudflare Pages **Connect Git → 仅本仓**
3. 生产分支构建静态产物 → `*.pages.dev`；自定义域名可选

## 明确不做（本阶段）

- 不把 `huanale` 桌面仓授权给 Cloudflare
- 不上 Netlify / Vercel 作为主托管（可迁移，但默认 CF）
- 不在本阶段做 ICP / 国内整站 CDN（后置）

## 运维注意

- 仓为 Private 时，Pages 仍可构建；对路人公开的是站点产物，不是 GitHub 源码浏览
- 构建环境能看见**本仓**全部文件；故本仓只放官网相关内容
