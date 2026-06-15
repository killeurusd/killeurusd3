import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          // CSP appliquée. ⚠️ Si GA4/Pixel sont ajoutés (branchement) : ajouter
          // https://www.googletagmanager.com à script-src et https://*.google-analytics.com
          // (+ https://connect.facebook.net / https://www.facebook.com pour Meta) à connect-src.
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
