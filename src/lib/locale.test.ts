import { describe, expect, it } from "vitest";
import {
  alternatePath,
  localeFromAcceptLanguage,
  localeFromPath,
} from "./locale";

describe("localeFromPath", () => {
  it("treats /en and /en/* as English", () => {
    expect(localeFromPath("/en")).toBe("en");
    expect(localeFromPath("/en/")).toBe("en");
    expect(localeFromPath("/en/privacy")).toBe("en");
  });

  it("defaults other paths to Chinese", () => {
    expect(localeFromPath("/")).toBe("zh");
    expect(localeFromPath("/privacy")).toBe("zh");
  });
});

describe("alternatePath", () => {
  it("switches root between zh and en", () => {
    expect(alternatePath("/", "en")).toBe("/en/");
    expect(alternatePath("/en/", "zh")).toBe("/");
    expect(alternatePath("/en", "zh")).toBe("/");
  });

  it("prefixes or strips /en for nested paths", () => {
    expect(alternatePath("/privacy", "en")).toBe("/en/privacy");
    expect(alternatePath("/en/privacy", "zh")).toBe("/privacy");
  });
});

describe("localeFromAcceptLanguage", () => {
  it("prefers Chinese when zh* is listed first among supported", () => {
    expect(localeFromAcceptLanguage("zh-CN,zh;q=0.9,en;q=0.8")).toBe("zh");
  });

  it("falls back to English when no Chinese tag is present", () => {
    expect(localeFromAcceptLanguage("en-US,en;q=0.9")).toBe("en");
  });

  it("defaults to Chinese when header is missing", () => {
    expect(localeFromAcceptLanguage(null)).toBe("zh");
    expect(localeFromAcceptLanguage(undefined)).toBe("zh");
  });
});
