const app = require('./app');

const PORT = 3000;

/**
 * Start the Express server.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Starts server on port 3000
 * node src/server.js
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
