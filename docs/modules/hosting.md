# 托管部署（规划）

**状态：站点可本地构建；Pages 项目尚未创建。**

构建：`npm run build` → 输出 `dist/`。Pages 设置：Framework preset 可选 Astro，或自定义 Build `npm run build` / Output `dist`。

## 目标形态

1. GitHub **Public** 仓 **`huanalesite`**（本仓；亦承载 Releases / Issues）
2. Cloudflare Pages **Connect Git → 仅本仓**
3. 生产分支构建静态产物 → `*.pages.dev`；自定义域名可选

## 明确不做（本阶段）

- 不把 `huanale` 桌面仓授权给 Cloudflare
- 不上 Netlify / Vercel 作为主托管（可迁移，但默认 CF）
- 不在本阶段做 ICP / 国内整站 CDN（后置）

## 运维注意

- 仓为 Public：路人可浏览源码、提 Issue、下 Releases；构建环境同样能看见本仓全部文件
- 本仓只放官网与对外分发相关内容，勿提交桌面应用私有实现细节或密钥
