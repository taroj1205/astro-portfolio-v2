import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import playformCompress from "@playform/compress"
import purgecss from "astro-purgecss"

import tailwind from "@astrojs/tailwind"

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
    tailwind(),
    playformCompress(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },
  scopedStyleStrategy: "attribute",
})
