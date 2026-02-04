/**
 * Convert a HEX color string into an RGB object.
 *
 * @param {string} hex - A 6‑character hexadecimal color string. May start with "#".
 * @returns {{ r: number, g: number, b: number }} The RGB representation.
 * @throws {Error} If the input is not a valid 6‑digit HEX color.
 *
 * @example
 * hexToRgb("#FF0000"); // { r: 255, g: 0, b: 0 }
 */
function hexToRgb(hex) {
  if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid HEX color");
  }

  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);

  return { r, g, b };
}

module.exports = hexToRgb;
