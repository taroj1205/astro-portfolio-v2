export const generateSizesAndWidths = (width: number, height: number) => {
  const aspectRatio = height / width
  const widths = [320, 480, 640, 800, 960, 1120, 1280, 1440, 1600, 1920].map(
    (w) => Math.round(w * aspectRatio),
  )
  const sizes = `(max-width: 320px) ${widths[0]}px, (max-width: 480px) ${widths[1]}px, (max-width: 640px) ${widths[2]}px, (max-width: 800px) ${widths[3]}px, (max-width: 960px) ${widths[4]}px, (max-width: 1120px) ${widths[5]}px, (max-width: 1280px) ${widths[6]}px, (max-width: 1440px) ${widths[7]}px, (max-width: 1600px) ${widths[8]}px, ${widths[9]}px`
  const w = Math.round(width * aspectRatio)
  const h = Math.round(height * aspectRatio)
  return { width: w, height: h, widths, sizes }
}
