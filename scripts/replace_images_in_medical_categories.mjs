import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const dataPath = path.join(root, "src", "data", "medical_categories.json");
const backupPath = dataPath + ".imgbak";

// CLI args: --size=800 --strategy=unsplash|prefix --prefix=https://cdn.example.com/path
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, ...rest] = a.replace(/^--/, "").split("=");
    return [k, rest.join("=") || true];
  })
);

const strategy = (args.strategy || "unsplash").toString();
const prefix = (args.prefix || "").toString().replace(/\/$/, "");
const width = parseInt(args.size || "800", 10);

// ✅ A list of working Unsplash medical photo IDs
const medicalPhotoIds = [
  "photo-1511174511562-5f7f18b874f8", // doctor with stethoscope
  "photo-1588776814546-3121d1a1a04e", // nurse
  "photo-1580281657521-61652f1989b0", // lab
  "photo-1588776814159-5c9eeb8b9b42", // hospital
  "photo-1582719478250-c89cae4dc85b", // surgery
  "photo-1611691543927-1d51d0c1a4b5", // research
  "photo-1504814532849-927ffce3f2da", // clinic tools
];

// Utility to make safe filenames
function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

// Build an image URL
function buildImageUrlByStrategy(name, level, index = 0) {
  const slug = slugify(name || level || "image");

  if (strategy === "prefix") {
    if (!prefix) throw new Error("prefix strategy requires --prefix");
    return `${prefix}/${slug}.jpg`;
  }

  // ✅ Use Unsplash CDN direct image (no API)
  const photoId = medicalPhotoIds[index % medicalPhotoIds.length];
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&q=80&w=${width}`;
}

function updateImages(data) {
  let counter = 0;

  return data.map((cat) => {
    const updatedSub = (cat.subCategories || []).map((sub) => {
      const updatedProducts = (sub.products || []).map((p) => {
        const url = buildImageUrlByStrategy(p.name, "product", counter++);
        return { ...p, images: [url] };
      });
      return {
        ...sub,
        image: buildImageUrlByStrategy(sub.name, "subcategory", counter++),
        products: updatedProducts,
      };
    });
    return {
      ...cat,
      image: buildImageUrlByStrategy(cat.name, "category", counter++),
      subCategories: updatedSub,
    };
  });
}

function main() {
  if (!fs.existsSync(dataPath)) {
    console.error("❌ File not found:", dataPath);
    process.exit(1);
  }

  const raw = fs.readFileSync(dataPath, "utf8");
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error("❌ Invalid JSON:", e.message);
    process.exit(1);
  }

  const updated = updateImages(data);

  if (!fs.existsSync(backupPath)) {
    fs.writeFileSync(backupPath, raw, "utf8");
  }

  fs.writeFileSync(
    dataPath,
    JSON.stringify(updated, null, 2) + "\n",
    "utf8"
  );

  console.log(
    `✅ Images updated using strategy="${strategy}" (${width}px wide)`
  );
}

main();
