const NAV_SLUG_PREFIX = "universal-tower-defense-z-";

function titleCase(value: string): string {
  return value.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export function slugToNavLabel(slug: string): string {
  const leaf = slug.split("/").pop() || slug;
  const remainder = leaf.startsWith(NAV_SLUG_PREFIX) ? leaf.slice(NAV_SLUG_PREFIX.length) : leaf;
  if (!remainder) return "";
  return titleCase(remainder);
}

export function shortenTitleForNav(title: string): string {
  const colonMatch = title.match(/^[^:]+:\s*(.+)$/);
  if (colonMatch && /universal tower defense z|utdz|utdx/i.test(title)) {
    return colonMatch[1].trim();
  }

  return title
    .replace(/^(mastering|master|unlock|dominate)\s+(the\s+)?/i, "")
    .replace(/^(universal tower defense z|utdz|utdx)[:\s-]*/i, "")
    .trim();
}

export function getNavLabel({
  title,
  navTitle,
  slug,
}: {
  title: string;
  navTitle?: string;
  slug: string;
}): string {
  if (navTitle?.trim()) return navTitle.trim();

  const fromSlug = slugToNavLabel(slug);
  if (fromSlug) return fromSlug;

  const shortened = shortenTitleForNav(title);
  return shortened || title;
}
