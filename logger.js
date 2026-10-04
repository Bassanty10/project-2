// logger.js
function logMessage(level, message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
}

logMessage("info", "Project 2 Logger initialized successfully!");

module.exports = { logMessage };