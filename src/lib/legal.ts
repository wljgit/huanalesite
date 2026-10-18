import type { Locale } from "./locale";
import eulaZh from "../legal/EULA.zh-CN.txt?raw";
import eulaEn from "../legal/EULA.en.txt?raw";

export function eulaText(locale: Locale): string {
  return locale === "en" ? eulaEn : eulaZh;
}

/** Split plain EULA text into blank-line-separated blocks for display. */
export function splitLegalBlocks(raw: string): string[] {
  return raw
    .replace(/\r\n/g, "\n")
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);
}

export function licensePath(locale: Locale): string {
  return locale === "en" ? "/en/license/" : "/license/";
}

export function homePath(locale: Locale): string {
  return locale === "en" ? "/en/" : "/";
}

export function privacyHash(locale: Locale): string {
  return `${homePath(locale)}#privacy`;
}
