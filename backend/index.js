const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5050;

app.get("/", (req, res) => {
  res.send("Backend is running 👨‍💻");
});

// POST /business-data
app.post("/business-data", (req, res) => {
  const { name, location } = req.body;

  const response = {
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 1000),
    headline: generateHeadline(name, location),
    satisfaction: Math.floor(Math.random() * 11) + 90, // 90–100%
    responseTime: Math.floor(Math.random() * 12) + 12, // 12–24h
    years: Math.floor(Math.random() * 6) + 1, // 1–6 years
  };

  res.json(response);
});


// GET /regenerate-headline
app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;
  const headline = generateHeadline(name, location);
  res.json({ headline });
});

function generateHeadline(name, location) {
  const headlines = [
    `Why ${name} is ${location}'s Sweetest Spot in 2025`,
    `Discover ${name}: ${location}'s Hidden Gem Everyone's Talking About`,
    `${name} Takes ${location} by Storm - Here's Why`,
    `The Secret Behind ${name}'s Success in ${location}`,
    `${name}: Redefining Excellence in ${location}`,
    `Why ${name} is the Talk of ${location} This Year`,
    `${name} Becomes ${location}'s Must-Visit Destination`,
    `The Rise of ${name}: ${location}'s New Favorite`,
    `${name} Sets New Standards in ${location}`,
    `How ${name} Conquered ${location}'s Hearts`,
  ];
  return headlines[Math.floor(Math.random() * headlines.length)];
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
