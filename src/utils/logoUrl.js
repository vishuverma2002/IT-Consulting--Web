// Resolve logo image URLs from company website domains.
// Tries Clearbit first, then Google favicons, then DuckDuckGo icons.

/** @param {string} website */
export function extractDomain(website) {
  try {
    return new URL(website).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

/** @param {string} website @returns {string[]} */
export function getLogoSources(website) {
  const domain = extractDomain(website);
  if (!domain) return [];

  return [
    `https://logo.clearbit.com/${domain}`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
  ];
}

/** @param {string} website @returns {string | null} */
export function getPrimaryLogoUrl(website) {
  const sources = getLogoSources(website);
  return sources[0] ?? null;
}
