// Converts pixels to rem. 
export function rem(px: number, baseFontSize = 16) {
  return `${px / baseFontSize}rem`;
}
