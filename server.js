const express = require("express");
const path = require("path");

const app = express();
// Render-এর ডাইনামিক পোর্ট নির্ধারণ
const PORT = process.env.PORT || 3000;

// URL-এর শেষের অপ্রয়োজনীয় স্ল্যাশ ট্রিম করা
app.use((req, res, next) => {
  if (req.path.endsWith("/") && req.path !== "/") {
    return res.redirect(301, req.path.slice(0, -1));
  }
  next();
});

// সরাসরি একই ফোল্ডারের সব ফাইল (HTML, CSS, JS) সার্ভ করা
app.use(express.static(__dirname));

// হোমপেজে index.html নিশ্চিত করা
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// সার্ভার চালু করা (0.0.0.0 দিয়ে Render-এ উন্মুক্ত রাখা)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
