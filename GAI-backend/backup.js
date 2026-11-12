import mongoose from 'mongoose';
import fs from 'node:fs';
import path from 'node:path';

const MONGO_URI = 'mongodb://127.0.0.1:27017/gai_database';
const backupDir = path.resolve('./backup');

if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

async function backup() {
  await mongoose.connect(MONGO_URI);
  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    const name = coll.name;
    const docs = await mongoose.connection.db.collection(name).find({}).toArray();
    const outPath = path.join(backupDir, `${name}.json`);
    fs.writeFileSync(outPath, JSON.stringify(docs, null, 2));
    console.log(`Backed up ${name}: ${docs.length} documents -> ${outPath}`);
  }

  await mongoose.disconnect();
  console.log('Backup complete.');
}

backup().catch((e) => {
  console.error(e);
  process.exit(1);
});