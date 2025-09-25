const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    "header": "eyJmaWQiOjE3NDk3LCJ0eXBlIjoiYXV0aCIsImtleSI6IjB4NDQyNUEyYjk4MDBjMDA1RDE5QjlFNjNiYjcxMEIyMTY2ZjFDNTQ2NSJ9",
    "payload": "eyJkb21haW4iOiJ3YWl0bGlzdC1taW5pLWFwcC1iZXJ5bC16ZXRhLnZlcmNlbC5hcHAifQ",
    "signature": "wwoweTzVO1FNvck6pMo8cDZSl5WRLIg0Yo+16GeXjEAg1F4XR+WHXaogKXJrAb/7ShSnQVO973/+qy3Mz1Q69hs="
  },
  miniapp: {
    version: "1",
    name: "Cubey", 
    subtitle: "Your AI Ad Companion", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

