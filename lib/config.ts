/** Replace with the real GA4 measurement ID. Do not invent one. */
export const gaMeasurementId = "G-XXXXXXXXXX";

export const gaPlaceholderId = "G-XXXXXXXXXX";

export const whatsappHref =
  "https://wa.me/923038766615?text=Hello%2C%20I%20want%20Agri%20Soft%20Pro.";

export const downloadHref =
  "https://github.com/syedsaadaliaskari/agrisoft-pro/releases/latest";

export const whatsappNumber = "+92 303 8766615";

export const siteEvents = ["page_view", "whatsapp_click", "download_click"] as const;

export type SiteEventName = (typeof siteEvents)[number];

export function isSiteEvent(value: string): value is SiteEventName {
  return (siteEvents as readonly string[]).includes(value);
}

export function isRealGaId(id: string): boolean {
  return id !== gaPlaceholderId && /^G-[A-Z0-9]+$/.test(id);
}
