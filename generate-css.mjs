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

const cssRules = techs
  .map(
    (tech) => `
.projects-view-container:has(input[value="${tech}"]:checked)
+ .projects-container
.project-card.${tech} {
  animation: card-in 0.5s ease-in-out forwards;
  pointer-events: auto;
}
`,
  )
  .join("")

const mediaPrefersReducedMotion = `@media (prefers-reduced-motion: reduce) {${techs
  .map(
    (tech) => `
  .projects-view-container:has(input[value="${tech}"]:checked)
+ .projects-container
.project-card.${tech} {
  animation: none;
  display: flex;
}`,
  )
  .join("")}}`

const compressedCSS = (cssRules + mediaPrefersReducedMotion)
  .replace(/\s+/g, " ")
  .replace(/\s*([{}:;,+])\s*/g, "$1")

const cssFilePath = path.join(
  process.cwd(),
  "./src/components/programming/projects/card.css",
)

fs.writeFileSync(cssFilePath, compressedCSS, "utf8")

console.log("Compressed CSS rules written to", cssFilePath)
