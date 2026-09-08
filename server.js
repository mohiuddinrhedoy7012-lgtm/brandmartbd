const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const publicPath = path.join(__dirname, "public");

// /checkout.html/ → /checkout.html
app.use((req, res, next) => {
  if (req.path.endsWith("/") && req.path !== "/") {
    return res.redirect(301, req.path.slice(0, -1));
  }
  next();
});

// Serve files from public folder
app.use(express.static(publicPath));

// Start server
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Website running at http://localhost:${PORT}`);
});