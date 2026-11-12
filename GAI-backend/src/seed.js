import mongoose from "mongoose";
import { Project } from "./models/Project.js";
import { News } from "./models/News.js";
import { Resource } from "./models/Resource.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seed = async () => {
  await connectDB();
  try {
    const dataPath = path.resolve(__dirname, "../../GAI-frontend/src/data.js");
    if (!fs.existsSync(dataPath)) {
      console.error("Data file not found");
      process.exit(1);
    }
    const data = await import(pathToFileURL(dataPath).href);
    const { projects = [], newsArticles = [], resources = [] } = data;

    for (const p of projects) {
      const slug = p.id || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      await Project.findOneAndUpdate(
        { slug },
        {
          slug,
          title: p.title,
          location: p.location,
          category: p.category,
          status: p.status,
          image_url: p.img,
          alt_text: p.alt,
          overview: p.overview,
          objectives: p.objectives || [],
          activities: p.activities || [],
          community: p.community,
          impact: p.impact,
        },
        { upsert: true }
      );
    }

    for (const a of newsArticles) {
      const slug = a.id || a.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      await News.findOneAndUpdate(
        { slug },
        {
          slug,
          date_label: a.date,
          category: a.category,
          author: a.author,
          title: a.title,
          image_url: a.img,
          alt_text: a.alt,
          excerpt: a.excerpt,
          body: a.body || [],
          pdf_url: a.pdfUrl,
          published: true,
        },
        { upsert: true }
      );
    }

    for (const r of resources) {
      await Resource.findOneAndUpdate(
        { title: r.title },
        {
          category: r.category,
          title: r.title,
          description: r.text,
          file_url: r.href,
          published: !!r.href,
        },
        { upsert: true }
      );
    }

    console.log("Data seeded successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
