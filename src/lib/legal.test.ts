import { describe, expect, it } from "vitest";
import {
  eulaText,
  homePath,
  licensePath,
  privacyHash,
  splitLegalBlocks,
} from "./legal";

describe("legal paths", () => {
  it("returns locale-aware routes", () => {
    expect(homePath("zh")).toBe("/");
    expect(homePath("en")).toBe("/en/");
    expect(licensePath("zh")).toBe("/license/");
    expect(licensePath("en")).toBe("/en/license/");
    expect(privacyHash("zh")).toBe("/#privacy");
    expect(privacyHash("en")).toBe("/en/#privacy");
  });
});

describe("legal source text", () => {
  it("loads EULA drafts for both locales", () => {
    expect(eulaText("zh")).toContain("最终用户许可协议");
    expect(eulaText("zh")).toContain("用户保证与赔偿");
    expect(eulaText("zh")).toContain("不承诺持续维护");
    expect(eulaText("en")).toContain("Chinese text prevails");
    expect(eulaText("en")).toContain("User Warranties and Indemnification");
    expect(eulaText("en")).toContain("does not promise continued maintenance");
  });

  it("splits EULA into display blocks", () => {
    const blocks = splitLegalBlocks(eulaText("zh"));
    expect(blocks.length).toBeGreaterThan(5);
    expect(blocks[0]).toContain("最终用户许可协议");
  });
});
