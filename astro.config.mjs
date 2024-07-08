import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

import playformCompress from "@playform/compress"

// https://astro.build/config
export default defineConfig({
  site: "https://taroj1205.poyo.jp",
  output: "static",
  integrations: [sitemap(), playformCompress()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },
  scopedStyleStrategy: "attribute",
})
