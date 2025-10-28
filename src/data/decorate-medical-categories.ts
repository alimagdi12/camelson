import fs from "fs";
import path from "path";

// Define types
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
}

interface SubCategory {
  id: string;
  name: string;
  image: string;
  products: Product[];
}

interface StoreCategory {
  id: string;
  name: string;
  image: string;
  subCategories: SubCategory[];
}

// Path to your JSON file
const inputPath = path.resolve(__dirname, "medical_categories.json");
const outputPath = path.resolve(__dirname, "medical_categories_decorated.json");

// Helper: generate Unsplash image
const toMedicalUnsplash = (name: string, size: string = "800x600") => {
  const query = encodeURIComponent(`medical, ${name}`);
  return `https://source.unsplash.com/${size}/?${query}`;
};

// Function that decorates all categories
function decorate(cats: StoreCategory[]): StoreCategory[] {
  return cats.map((cat) => {
    const subCategories = (cat.subCategories || []).map((sub) => {
      const products = (sub.products || []).map((p) => {
        const img = toMedicalUnsplash(p.name, "600x600");
        return { ...p, images: [img] };
      });
      return {
        ...sub,
        image: toMedicalUnsplash(sub.name, "800x500"),
        products,
      };
    });
    return {
      ...cat,
      image: toMedicalUnsplash(cat.name, "1000x600"),
      subCategories,
    };
  });
}

// Load and decorate data
const data = JSON.parse(fs.readFileSync(inputPath, "utf-8")) as StoreCategory[];
const updated = decorate(data);

// Save to new file
fs.writeFileSync(outputPath, JSON.stringify(updated, null, 2), "utf-8");

console.log("✅ medical_categories_decorated.json created successfully!");
