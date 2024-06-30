import { translations as translationsEN } from "../locales/en"
import { translations as translationsJA } from "../locales/ja"

export const languages = {
  en: "English",
  ja: "日本語",
}

export const defaultLang = "en"

export const ui = {
  en: translationsEN,
  ja: translationsJA,
} as const

export type Locales = keyof typeof ui
