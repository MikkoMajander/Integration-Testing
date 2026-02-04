const express = require('express');
const hexToRgb = require('./utils/hextorgb');

const app = express();

/**
 * GET /hex-to-rgb/:hex
 *
 * Convert a HEX color to RGB via REST API.
 *
 * @route GET /hex-to-rgb/:hex
 * @param {string} req.params.hex - The HEX color string.
 * @returns {Object} 200 - JSON object containing r, g, b values.
 * @returns {Object} 400 - Error message if HEX is invalid.
 *
 * @example
 * GET /hex-to-rgb/FF0000
 * Response: { "r": 255, "g": 0, "b": 0 }
 */
app.get('/hex-to-rgb/:hex', (req, res) => {
  try {
    const rgb = hexToRgb(req.params.hex);
    res.json(rgb);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = app;
