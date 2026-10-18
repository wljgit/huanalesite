export type Locale = "zh" | "en";

export function localeFromPath(pathname: string): Locale {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/en" || path.startsWith("/en/")) return "en";
  return "zh";
}

export function alternatePath(pathname: string, target: Locale): string {
  const current = localeFromPath(pathname);
  if (current === target) {
    return normalizeTrailing(pathname, target);
  }

  const trimmed = pathname.replace(/\/+$/, "") || "/";

  if (target === "en") {
    if (trimmed === "/") return "/en/";
    return `/en${trimmed}`;
  }

  if (trimmed === "/en") return "/";
  return trimmed.replace(/^\/en/, "") || "/";
}

export function localeFromAcceptLanguage(
  header: string | null | undefined,
): Locale {
  if (!header) return "zh";
  const primary = header.split(",")[0]?.trim().toLowerCase() ?? "";
  if (primary.startsWith("zh")) return "zh";
  if (primary.startsWith("en")) return "en";
  return "zh";
}

function normalizeTrailing(pathname: string, locale: Locale): string {
  if (locale === "en") {
    const trimmed = pathname.replace(/\/+$/, "") || "/en";
    return trimmed === "/en" ? "/en/" : trimmed;
  }
  const trimmed = pathname.replace(/\/+$/, "") || "/";
  return trimmed === "/" ? "/" : trimmed;
}
