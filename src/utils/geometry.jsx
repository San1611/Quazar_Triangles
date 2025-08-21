export function dist([x1, y1], [x2, y2]) {
  const dx = x1 - x2, dy = y1 - y2;
  return Math.hypot(dx, dy);
}

export function triangleSides(A, B, C) {
  const a = dist(B, C); // opposite A
  const b = dist(A, C); // opposite B
  const c = dist(A, B); // opposite C
  return { a, b, c };
}

export function heronArea(A, B, C) {
  const { a, b, c } = triangleSides(A, B, C);
  const s = (a + b + c) / 2;
  const val = Math.max(s * (s - a) * (s - b) * (s - c), 0);
  return Math.sqrt(val);
}

export function heightGivenBase(baseLen, area) {
  return baseLen === 0 ? 0 : (2 * area) / baseLen;
}
