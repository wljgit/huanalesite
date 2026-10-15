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
  downloadLicenseHint: string;
  screenshotAlt: string;
  screenshotReportsAlt: string;
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
  footerResources: string;
  footerHome: string;
  footerGithub: string;
  footerDocs: string;
  footerReleases: string;
  footerIssues: string;
  footerPrivacy: string;
  footerLicense: string;
  footerCopyright: string;
  legalBackHome: string;
  licenseMetaTitle: string;
  licenseMetaDescription: string;
  licenseInstallNote: string;
};

const zh: Messages = {
  metaTitle: "花哪了 — 本机时间追踪",
  metaDescription:
    "花哪了：在本机自动记下时间花在哪。默认数据保存在本机，无账号。支持 Windows 与 macOS。",
  navFeatures: "功能",
  navPrivacy: "隐私",
  navFaq: "常见问题",
  navDownload: "下载",
  langZh: "中",
  langEn: "EN",
  badge: "本机优先",
  headline: "时间花在哪，一眼就看见",
  subhead:
    "如果你习惯记日志，或总想弄清自己在电脑前到底干了什么——以前往往只能靠手工一条条记，又碎又难坚持。现在有更省事的办法：花哪了在本机自动记下你用过的应用，打开就能回看时间花在哪。默认数据保存在本机，无需账号；开启 AI 或同步等可选功能后，相关数据才会按说明离开本机。",
  downloadWindows: "下载 Windows 版",
  downloadMac: "下载 macOS 版",
  viewGithub: "查看 GitHub →",
  metaLine: "Windows · macOS · 无账号 · 默认本机",
  downloadLicenseHint: "安装时需同意许可协议",
  screenshotAlt: "花哪了应用时间线截图",
  screenshotReportsAlt: "花哪了应用报表截图",
  featuresEyebrow: "功能",
  featuresTitle: "为日常回看而做，不是监控套件",
  featuresLead:
    "一天过去之后，时间线会把你在电脑前的片段摊开，规则报表再汇总时长与占比。笔记本和台式上的记录可以同步到一起，拼成完整的一天；需要文字归纳时，再打开 AI 日报。",
  featureTimelineTitle: "时间线",
  featureTimelineBody:
    "按天回看你在电脑前切换过哪些应用、各待了多久。通过时间轴视图，可以清楚地看出主要时间花在了哪些应用上；通过列表视图，可以看到更多细节。",
  featureReportsTitle: "规则报表",
  featureReportsBody:
    "把零散记录收成可读的统计：按天、按周、按月，或自选一段日子，看各应用的时长与占比。有多台电脑时，也能分开查看每台机器花了多少时间。汇总按规则计算，不依赖大模型。",
  featureSyncTitle: "多机同步",
  featureSyncBody:
    "有笔记本、也有台式，或手头不止一台电脑时，记录往往散落各处。配对之后，各台机器上的活动会加密同步到一起，既不用自己导出、对照、手工合并，传输过程也仍保护隐私。",
  featureDigestTitle: "AI 日报",
  featureDigestBody:
    "如果你想留一份当天的流水账，看上午、中午、晚上各做了什么，AI 日报可以把活动收成这样的分段小结。这是可选项，配置模型后才能启用。更推荐使用本地模型；若改走第三方远程接口，使用数据便会发给第三方，需权衡隐私风险。",
  privacyEyebrow: "隐私",
  privacyTitle: "默认保存在本机，可选功能由你开启",
  privacyLead:
    "活动数据默认只保存在你自己的电脑上，不会存到官网上，也不需要账号。多机同步、云端 AI 等可选功能，需你主动配置后才会按说明外发。历史记录也可开启加密封存。统计仅供个人参考，不作考勤或法律证据。",
  privacyCollectTitle: "会记",
  privacyCollectBody:
    "只记前台应用、窗口标题、停留时长，以及空闲 / 离开。标题里常会带上有用的线索——比如浏览器标签上的页面或视频名——方便你回看自己在某个应用里大致做了什么。",
  privacySkipTitle: "不记",
  privacySkipBody:
    "不会进入应用内部读取内容：Word、Excel 里写了什么，页面正文是什么，都不会去取。记的是窗口标题这一层，不是文档或网页正文。剪贴板、截屏、键鼠输入同样不采。",
  privacyLocalTitle: "存在哪",
  privacyLocalBody:
    "本机 SQLite。开启隐私保护后，过往日期的活动可以加密封存；多机同步则在配对后加密交换。只有配置第三方远程模型做 AI 日报，或开启同步时，相关数据才会离开本机。",
  faqEyebrow: "FAQ",
  faqTitle: "常见问题",
  faqAccountQ: "需要注册账号吗？",
  faqAccountA: "不需要。免费使用不依赖官网账号体系。",
  faqUploadQ: "数据会上云吗？",
  faqUploadA:
    "默认不会。活动记录保存在本机。只有配置了第三方远程模型做 AI 日报，或开启多机同步时，相关数据才会按说明离开本机；使用本地模型且不同步则不会外发。",
  faqPlatformsQ: "支持哪些平台？",
  faqPlatformsA:
    "目前支持 Windows 与 macOS 桌面版。没有 iOS / Android 移动版。",
  faqSignQ: "安装时被系统拦截？",
  faqSignA:
    "有可能。Windows 或 macOS 遇到尚不熟悉的安装包时，常会弹出「未知发布者」一类提示。请确认安装包来自本站指向的 GitHub Releases，核对无误后再继续安装。",
  ctaTitle: "先装上，看看今天时间花在哪",
  ctaLead: "一次安装即可用。无需浏览器扩展。",
  footerTagline: "时间花在哪，一眼就看见",
  footerProduct: "产品",
  footerResources: "本站",
  footerHome: "首页",
  footerGithub: "GitHub",
  footerDocs: "文档",
  footerReleases: "Releases",
  footerIssues: "Issues",
  footerPrivacy: "隐私",
  footerLicense: "许可协议",
  footerCopyright: "Copyright © 2026 wljgit. All rights reserved.",
  legalBackHome: "← 回到首页",
  licenseMetaTitle: "许可协议 — 花哪了",
  licenseMetaDescription:
    "花哪了最终用户许可协议（EULA）。安装或使用即表示同意本协议；中英文冲突时以中文为准。",
  licenseInstallNote:
    "安装或使用本软件，即表示您已阅读并同意本协议。本页提供中文文本；英文译本见英文站许可协议页。中英文冲突时，以中文为准。",
};

const en: Messages = {
  metaTitle: "花哪了 - Local time tracking",
  metaDescription:
    "Huanale automatically records where your time goes on your machine. Data stays on your device by default; no account. Windows and macOS.",
  navFeatures: "Features",
  navPrivacy: "Privacy",
  navFaq: "FAQ",
  navDownload: "Download",
  langZh: "中",
  langEn: "EN",
  badge: "Local-first",
  headline: "See where your time goes",
  subhead:
    "If you keep a journal, or just want to know what you actually did at the computer - you used to have to log it by hand, tedious and hard to stick with. There's an easier way: huanale automatically records the apps you use on your machine, so you can look back and see where the time went. Data stays on your device by default - no account required. Optional AI or sync may send related data only when you turn them on, as described in the product notes.",
  downloadWindows: "Download for Windows",
  downloadMac: "Download for macOS",
  viewGithub: "View on GitHub →",
  metaLine: "Windows · macOS · No account · Local by default",
  downloadLicenseHint: "Installer requires accepting the license",
  screenshotAlt: "Huanale timeline screenshot",
  screenshotReportsAlt: "Huanale reports screenshot",
  featuresEyebrow: "Features",
  featuresTitle: "Built for reviewing your day - not surveillance",
  featuresLead:
    "After a day ends, the timeline lays out what you did at the computer; rule-based reports then summarize durations and shares. Records from a laptop and a desktop can sync into one continuous day. For a written recap, turn on AI digest.",
  featureTimelineTitle: "Timeline",
  featureTimelineBody:
    "Review a day of apps you used and how long you stayed in each. The timeline view makes it clear which apps took most of your time; the list view shows more detail.",
  featureReportsTitle: "Rule-based reports",
  featureReportsBody:
    "Turn scattered records into readable stats: by day, week, or month, or pick your own range to see duration and share per app. With more than one computer, you can also break the numbers down by machine. Totals follow fixed rules - no model required.",
  featureSyncTitle: "Multi-device sync",
  featureSyncBody:
    "When you have a laptop and a desktop - or more than one computer - records often end up scattered. After pairing, activity syncs across machines in encrypted form: no more exporting, comparing, or merging by hand, and privacy stays protected in transit.",
  featureDigestTitle: "AI digest",
  featureDigestBody:
    "If you want a plain log of the day - what you did in the morning, afternoon, and evening - AI digest turns activity into short period summaries. It is optional and only works after you configure a model. A local model is recommended; with a third-party remote API, your usage data is sent to that provider, so weigh the privacy trade-off.",
  privacyEyebrow: "Privacy",
  privacyTitle: "Local by default; optional features stay under your control",
  privacyLead:
    "Activity stays on your own computer by default - not on this website, and no account is required. Multi-device sync and cloud AI only send data after you configure them. Past days can also be sealed with encryption. Stats are for personal reference only - not attendance or legal evidence.",
  privacyCollectTitle: "Captured",
  privacyCollectBody:
    "Only the foreground app, window title, how long you stayed, and idle / away. Titles often carry useful clues - like a page or video name on a browser tab - so you can recall roughly what you did in that app.",
  privacySkipTitle: "Not captured",
  privacySkipBody:
    "It does not go inside apps to read content: what you typed in Word or Excel, or the body of a page, is never taken. What is kept is the window-title layer, not document or page content. Clipboard, screenshots, and keystroke input are not captured either.",
  privacyLocalTitle: "Where it lives",
  privacyLocalBody:
    "Local SQLite. With privacy protection on, past days can be sealed encrypted; multi-device sync exchanges data encrypted after pairing. Related data leaves the device only if you configure a third-party remote model for AI digest, or turn on sync.",
  faqEyebrow: "FAQ",
  faqTitle: "Common questions",
  faqAccountQ: "Do I need an account?",
  faqAccountA: "No. Free use does not depend on a website account.",
  faqUploadQ: "Is my data uploaded?",
  faqUploadA:
    "Not by default. Activity stays on your machine. Related data leaves the device only if you configure a third-party remote model for AI digest, or turn on multi-device sync; a local model with sync off does not send it out.",
  faqPlatformsQ: "Which platforms are supported?",
  faqPlatformsA:
    "Windows and macOS desktops today. There is no iOS or Android app.",
  faqSignQ: "Does the OS block the installer?",
  faqSignA:
    "It might. Windows and macOS often warn about an unknown publisher when they do not yet recognize an installer. Make sure the file comes from this site's GitHub Releases, then continue only after you have checked it.",
  ctaTitle: "Install it. See where today went.",
  ctaLead: "One install. No browser extension required.",
  footerTagline: "See where your time goes",
  footerProduct: "Product",
  footerResources: "This site",
  footerHome: "Home",
  footerGithub: "GitHub",
  footerDocs: "Documentation",
  footerReleases: "Releases",
  footerIssues: "Issues",
  footerPrivacy: "Privacy",
  footerLicense: "License",
  footerCopyright: "Copyright © 2026 wljgit. All rights reserved.",
  legalBackHome: "← Back to home",
  licenseMetaTitle: "License — Huanale",
  licenseMetaDescription:
    "Huanale End User License Agreement (EULA). Installing or using the software means you agree. If English and Chinese conflict, Chinese prevails.",
  licenseInstallNote:
    "By installing or using the software, you acknowledge that you have read and agree to this Agreement. If this English text conflicts with the Chinese text, the Chinese text prevails.",
};

const catalog: Record<Locale, Messages> = { zh, en };

export function t(locale: Locale): Messages {
  return catalog[locale];
}
