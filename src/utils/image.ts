export const generateSizesAndWidths = (
  width: number,
  height: number,
  minWidth = 320,
) => {
  const isVertical = height > width
  const aspectRatio = isVertical ? width / height : height / width
  const widthArray = [320, 480, 640, 800, 960, 1120, 1280, 1440, 1600, 1920]
  const filteredWidthArray = widthArray.filter((w) => w >= minWidth)
  const widths = filteredWidthArray.map((w) => Math.round(w * aspectRatio))
  const sizes = filteredWidthArray.map((w) => `${w}px`).join(", ")
  const w = isVertical
    ? Math.round(height * aspectRatio)
    : Math.round(width * aspectRatio)
  const h = isVertical
    ? Math.round(width * aspectRatio)
    : Math.round(height * aspectRatio)
  return { width: w, height: h, widths, sizes }
}
