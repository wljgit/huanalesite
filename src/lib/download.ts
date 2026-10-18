/**
 * Public site / distribution repo (installers on Releases).
 * Desktop app source stays private in `huanale`; visitors use this public repo.
 */
export const SITE_GITHUB = "https://github.com/wljgit/huanalesite";

/** README on the public site repo doubles as documentation for now. */
export const SITE_DOCS = SITE_GITHUB;

export const SITE_ISSUES = `${SITE_GITHUB}/issues`;

/** Land on latest Releases until Stage 2 pins per-platform asset URLs. */
export const SITE_RELEASES_LATEST = `${SITE_GITHUB}/releases/latest`;

export type DownloadPlatform = "windows" | "macos";

export function downloadUrl(
  _platform: DownloadPlatform,
  releasesLatest: string = SITE_RELEASES_LATEST,
): string {
  // Both platforms share the Releases page for now; pin assets later.
  return releasesLatest;
}
