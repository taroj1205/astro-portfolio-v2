import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import playformCompress from "@playform/compress"

import purgecss from "astro-purgecss"

// https://astro.build/config
export default defineConfig({
  site: "https://taroj1205.poyo.jp",
  output: "static",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          ja: "ja",
        },
      },
    }),
    purgecss(),
    playformCompress(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },
  scopedStyleStrategy: "attribute",
})
