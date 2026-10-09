const assetBaseUrl = (import.meta.env.VITE_ASSET_BASE_URL ?? "").replace(/\/+$/, "");

export function assetUrl(path: string) {
  const normalizedPath = path.replace(/^\/+/, "");
  return assetBaseUrl ? `${assetBaseUrl}/${normalizedPath}` : `/${normalizedPath}`;
}
