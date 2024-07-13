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

const sanitizeTech = (tech: string) =>
  tech.toLowerCase().replace(/\./g, "").replace(/#/g, "s")

const visibilityRule = (tech: string) =>
  `group-has-[input[value="${sanitizeTech(tech)}"]:checked]:visible`

const maxHeightRule = (tech: string) =>
  `group-has-[input[value="${sanitizeTech(tech)}"]:checked]:max-h-[40rem]`

const maxWidthRule = (tech: string) =>
  `group-has-[input[value="${sanitizeTech(tech)}"]:checked]:max-w-[40rem]`

const outlineRule = (tech: string) =>
  `group-has-[input[value="${sanitizeTech(tech)}"]:checked]:outline-1`

const rules = [outlineRule, maxHeightRule, maxWidthRule, visibilityRule]

const cssRules = techs
  .map((tech) => {
    const sanitizedTech = sanitizeTech(tech)
    return `.${sanitizedTech} { 
      @apply ${rules.map((rule) => rule(tech)).join(" ")};
    }`
  })
  .join("\n")

// const tailwindTemplate = `@tailwind base;
// ${cssRules}
// `

const cssFilePath = path.join(
  process.cwd(),
  "./src/components/programming/projects/card.css",
)

fs.writeFileSync(cssFilePath, cssRules, "utf8")

console.log("CSS rules written to", cssFilePath)
