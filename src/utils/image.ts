export const generateSizesAndWidths = (width: number, height: number) => {
  const aspectRatio = height / width
  const widthArray = [320, 480, 640, 800, 960, 1120, 1280, 1440, 1600, 1920]
  const widths = widthArray.map((w) => Math.round(w * aspectRatio))
  const sizes = widthArray.map((w) => `${w}px`).join(", ")
  const w = Math.round(width * aspectRatio)
  const h = Math.round(height * aspectRatio)
  return { width: w, height: h, widths, sizes }
}
