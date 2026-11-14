import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import publicRoutes from "./routes/public.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 8080);

connectDB();

if (!process.env.JWT_SECRET || process.env.JWT_SECRET === "change_this_to_a_long_random_secret") {
  console.warn("WARNING: JWT_SECRET is missing or still the example value. Set a long random secret in .env.");
}

app.set("trust proxy", 1);
app.disable("x-powered-by");

const normalizeOrigin = (value) => {
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
};

const allowedOrigins = new Set(
  [process.env.CLIENT_ORIGIN, process.env.CLIENT_URL, "https://green-africa-omega.vercel.app"]
    .filter(Boolean)
    .flatMap((value) => value.split(","))
    .map((origin) => normalizeOrigin(origin.trim()))
    .filter(Boolean)
);

app.use(helmet());
app.use((req, res, next) => {
  const origin = req.get("Origin");
  const normalizedOrigin = origin ? normalizeOrigin(origin) : null;

  if (normalizedOrigin && allowedOrigins.has(normalizedOrigin)) {
    res.setHeader("Access-Control-Allow-Origin", normalizedOrigin);
    res.vary("Origin");

    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.setHeader("Access-Control-Max-Age", "86400");
      return res.sendStatus(204);
    }
  } else if (req.method === "OPTIONS") {
    return res.sendStatus(403);
  }

  next();
});
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true, limit: "2mb" }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 300 }));

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: "Too many login attempts. Please try again later." },
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", database: "connected" });
});

app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", publicRoutes);

app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
});

app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ message: "Invalid JSON body." });
  }
  if (err.type === "entity.too.large") {
    return res.status(413).json({ message: "Request body is too large." });
  }
  console.error(err);
  if (res.headersSent) return next(err);
  res.status(500).json({ message: "Internal server error." });
});

app.listen(PORT, () => {
  console.log(`GAI backend running at http://localhost:${PORT}`);
});

export default app;
