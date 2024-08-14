import fs from "node:fs"
import path from "node:path"

const techs = [
  "nextjs",
  "javascript",
  "typescript",
  "chrome",
  "unity",
  "cs",
  "flask",
  "sqlite3",
]

const sanitizeTech = (tech) =>
  tech.toLowerCase().replace(/\./g, "").replace(/#/g, "s")

const visibilityRule = (tech) =>
  `group-has-[input[value="${sanitizeTech(tech)}"]:checked]:visible`

const maxHeightRule = (tech) =>
  `group-has-[input[value="${sanitizeTech(tech)}"]:checked]:max-h-[40rem]`

const outlineRule = (tech) =>
  `group-has-[input[value="${sanitizeTech(tech)}"]:checked]:outline-1`

const cssRules = techs
  .map((tech) => {
    const sanitizedTech = sanitizeTech(tech)
    return `.${sanitizedTech} { 
      @apply ${visibilityRule(tech)} ${maxHeightRule(tech)} ${outlineRule(tech)};
    }`
  })
  .join("\n")

const tailwindTemplate = `@tailwind base;
@tailwind components;
@tailwind utilities;
${cssRules}
`

const cssFilePath = path.join(
  process.cwd(),
  "./src/components/programming/projects/card.css",
)

fs.writeFileSync(cssFilePath, tailwindTemplate, "utf8")

console.log("CSS rules written to", cssFilePath)
