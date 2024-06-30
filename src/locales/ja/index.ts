import type { Translation } from "../en"
import * as briefIntro from "./brief-intro"
import * as education from "./education"
import * as footer from "./footer"
import * as header from "./header"
import * as heading from "./heading"
import * as langSwitcher from "./lang-switcher"
import * as metadata from "./metadata"
import * as notFound from "./not-found"
import * as projects from "./projects"

export const translations = {
  ...heading,
  ...metadata,
  ...notFound,
  ...projects,
  ...footer,
  ...header,
  ...langSwitcher,
  ...briefIntro,
  ...education,
} as Translation
