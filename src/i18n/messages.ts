import type { Locale } from "../lib/locale";

export type Messages = {
  metaTitle: string;
  metaDescription: string;
  navFeatures: string;
  navPrivacy: string;
  navFaq: string;
  navDownload: string;
  langZh: string;
  langEn: string;
  badge: string;
  headline: string;
  subhead: string;
  downloadWindows: string;
  downloadMac: string;
  viewGithub: string;
  metaLine: string;
  screenshotAlt: string;
  featuresEyebrow: string;
  featuresTitle: string;
  featuresLead: string;
  featureTimelineTitle: string;
  featureTimelineBody: string;
  featureReportsTitle: string;
  featureReportsBody: string;
  featureSyncTitle: string;
  featureSyncBody: string;
  featureDigestTitle: string;
  featureDigestBody: string;
  privacyEyebrow: string;
  privacyTitle: string;
  privacyLead: string;
  privacyCollectTitle: string;
  privacyCollectBody: string;
  privacySkipTitle: string;
  privacySkipBody: string;
  privacyLocalTitle: string;
  privacyLocalBody: string;
  faqEyebrow: string;
  faqTitle: string;
  faqAccountQ: string;
  faqAccountA: string;
  faqUploadQ: string;
  faqUploadA: string;
  faqPlatformsQ: string;
  faqPlatformsA: string;
  faqSignQ: string;
  faqSignA: string;
  ctaTitle: string;
  ctaLead: string;
  footerTagline: string;
  footerProduct: string;
  footerOpenSource: string;
  footerHome: string;
  footerGithub: string;
  footerDocs: string;
  footerReleases: string;
  footerIssues: string;
  footerPrivacy: string;
};

const zh: Messages = {
  metaTitle: "花哪了 — 本机时间追踪",
  metaDescription:
    "花哪了：在本机自动记下时间花在哪。默认不上云，无账号。支持 Windows 与 macOS。",
  navFeatures: "功能",
  navPrivacy: "隐私",
  navFaq: "常见问题",
  navDownload: "下载",
  langZh: "中",
  langEn: "EN",
  badge: "本机优先",
  headline: "时间花在哪，一眼就看见",
  subhead:
    "如果你习惯记日志，或总想弄清自己在电脑前到底干了什么——以前往往只能靠手工一条条记，又碎又难坚持。现在有更省事的办法：花哪了在本机自动记下你用过的应用，打开就能回看时间花在哪。数据始终留在你的电脑，无需账号，不进云端。",
  downloadWindows: "下载 Windows 版",
  downloadMac: "下载 macOS 版",
  viewGithub: "查看 GitHub →",
  metaLine: "Windows · macOS · 无账号 · 数据本机",
  screenshotAlt: "花哪了应用时间线截图",
  featuresEyebrow: "功能",
  featuresTitle: "为日常回看而做，不是监控套件",
  featuresLead:
    "一天过去之后，时间线会把你在电脑前的片段摊开，规则报表再汇总时长与占比。笔记本和台式上的记录可以同步到一起，拼成完整的一天；需要文字归纳时，再打开可选的 AI 日报。",
  featureTimelineTitle: "时间线",
  featureTimelineBody:
    "按日浏览前台片段：竖直时间轴与应用泳道，列表视图随时切换。",
  featureReportsTitle: "规则报表",
  featureReportsBody: "时长与占比由程序汇总，不依赖模型，打开就能看。",
  featureSyncTitle: "多机同步",
  featureSyncBody:
    "笔记本与台式各自记账，也能把记录合到一起回看。同步由你显式开启，活动数据仍以本机为家。",
  featureDigestTitle: "可选 AI 日报",
  featureDigestBody:
    "你自己配置本地或云端模型后，再把当天事件收成叙事；密钥留在本机。",
  privacyEyebrow: "隐私",
  privacyTitle: "默认本机。采集边界说清楚。",
  privacyLead: "官网不托管你的活动数据；桌面应用也默认不上云、无强制账号。",
  privacyCollectTitle: "默认会记",
  privacyCollectBody: "前台应用、窗口标题、时长，以及空闲 / 离开。",
  privacySkipTitle: "默认不记",
  privacySkipBody: "剪贴板、截屏、全局键盘内容。",
  privacyLocalTitle: "存在哪",
  privacyLocalBody: "本机 SQLite。只有你显式配置云端模型 API 时，摘要字段才会发往该 API。",
  faqEyebrow: "FAQ",
  faqTitle: "常见问题",
  faqAccountQ: "需要注册账号吗？",
  faqAccountA: "不需要。免费使用不依赖官网账号体系。",
  faqUploadQ: "数据会上云吗？",
  faqUploadA:
    "默认不会。活动记录留在本机。可选云端 AI 需你自行配置，并只会发送用于摘要的字段。",
  faqPlatformsQ: "支持哪些平台？",
  faqPlatformsA:
    "目前支持 Windows 与 macOS 桌面版。没有 iOS / Android 移动版。",
  faqSignQ: "安装时被系统拦截？",
  faqSignA:
    "未代码签名时 Windows SmartScreen，或未公证时 macOS Gatekeeper，可能提示未知发布者。可从本站 GitHub Releases 核对来源后再安装。",
  ctaTitle: "先装上，看看今天时间花在哪。",
  ctaLead: "一次安装即可用。无需浏览器扩展。",
  footerTagline: "本机时间追踪桌面应用",
  footerProduct: "产品",
  footerOpenSource: "开源",
  footerHome: "首页",
  footerGithub: "GitHub",
  footerDocs: "文档",
  footerReleases: "Releases",
  footerIssues: "Issues",
  footerPrivacy: "隐私",
};

const en: Messages = {
  metaTitle: "花哪了 - Local time tracking",
  metaDescription:
    "花哪了 automatically records where your time goes on your machine. No cloud by default, no account. Windows and macOS.",
  navFeatures: "Features",
  navPrivacy: "Privacy",
  navFaq: "FAQ",
  navDownload: "Download",
  langZh: "中",
  langEn: "EN",
  badge: "Local-first",
  headline: "See where your time goes",
  subhead:
    "If you keep a journal, or just want to know what you actually did at the computer - you used to have to log it by hand, tedious and hard to stick with. There's an easier way: huanale automatically records the apps you use on your machine, so you can look back and see where the time went. Data stays on your computer - no account, nothing sent to the cloud.",
  downloadWindows: "Download for Windows",
  downloadMac: "Download for macOS",
  viewGithub: "View on GitHub →",
  metaLine: "Windows · macOS · No account · Local data",
  screenshotAlt: "花哪了 app timeline screenshot",
  featuresEyebrow: "Features",
  featuresTitle: "Built for reviewing your day - not surveillance",
  featuresLead:
    "After a day ends, the timeline lays out what you did at the computer; rule-based reports then summarize durations and shares. Records from a laptop and a desktop can sync into one continuous day. For a written recap, turn on the optional AI digest.",
  featureTimelineTitle: "Timeline",
  featureTimelineBody:
    "Browse a day of foreground segments: vertical axis with app swimlanes, or a list view.",
  featureReportsTitle: "Rule-based reports",
  featureReportsBody:
    "Durations and shares are computed in-app - no model required.",
  featureSyncTitle: "Multi-device sync",
  featureSyncBody:
    "Track separately on a laptop and a desktop, then bring the records together to review. Sync is opt-in; activity data still lives on your machines first.",
  featureDigestTitle: "Optional AI digest",
  featureDigestBody:
    "Configure a local or cloud model yourself to narrate the day. Keys stay on your machine.",
  privacyEyebrow: "Privacy",
  privacyTitle: "Local by default. Clear capture boundaries.",
  privacyLead:
    "This site never hosts your activity data. The desktop app also defaults to no cloud and no required account.",
  privacyCollectTitle: "Captured by default",
  privacyCollectBody:
    "Foreground app, window title, duration, and idle / away.",
  privacySkipTitle: "Not captured by default",
  privacySkipBody: "Clipboard, screenshots, or global keystroke content.",
  privacyLocalTitle: "Where it lives",
  privacyLocalBody:
    "Local SQLite. Only if you configure a cloud model API do summary fields go to that API.",
  faqEyebrow: "FAQ",
  faqTitle: "Common questions",
  faqAccountQ: "Do I need an account?",
  faqAccountA: "No. Free use does not depend on a website account.",
  faqUploadQ: "Is my data uploaded?",
  faqUploadA:
    "Not by default. Activity stays on your machine. Optional cloud AI requires your own config and only sends fields needed for a digest.",
  faqPlatformsQ: "Which platforms are supported?",
  faqPlatformsA:
    "Windows and macOS desktops today. There is no iOS or Android app.",
  faqSignQ: "Does the OS block the installer?",
  faqSignA:
    "Without code signing, Windows SmartScreen - or Gatekeeper on unsigned/unnotarized macOS builds - may warn about an unknown publisher. Verify the build on this site's GitHub Releases before installing.",
  ctaTitle: "Install it. See where today went.",
  ctaLead: "One install. No browser extension required.",
  footerTagline: "Local time-tracking for your desktop",
  footerProduct: "Product",
  footerOpenSource: "Open source",
  footerHome: "Home",
  footerGithub: "GitHub",
  footerDocs: "Documentation",
  footerReleases: "Releases",
  footerIssues: "Issues",
  footerPrivacy: "Privacy",
};

const catalog: Record<Locale, Messages> = { zh, en };

export function t(locale: Locale): Messages {
  return catalog[locale];
}
