import { describe, expect, it } from "vitest";
import {
  SITE_DOCS,
  SITE_GITHUB,
  SITE_ISSUES,
  SITE_RELEASES_LATEST,
  downloadUrl,
} from "./download";

describe("downloadUrl", () => {
  it("points Windows and macOS at the public site Releases page", () => {
    expect(downloadUrl("windows")).toBe(SITE_RELEASES_LATEST);
    expect(downloadUrl("macos")).toBe(SITE_RELEASES_LATEST);
  });

  it("allows overriding the releases base for tests or mirrors", () => {
    expect(downloadUrl("windows", "https://example.test/releases/latest")).toBe(
      "https://example.test/releases/latest",
    );
  });
});

describe("release constants", () => {
  it("uses the public huanalesite repo, not the private app repo", () => {
    expect(SITE_GITHUB).toBe("https://github.com/wljgit/huanalesite");
    expect(SITE_DOCS).toBe(SITE_GITHUB);
    expect(SITE_ISSUES).toBe(`${SITE_GITHUB}/issues`);
    expect(SITE_RELEASES_LATEST).toBe(`${SITE_GITHUB}/releases/latest`);
  });
});
