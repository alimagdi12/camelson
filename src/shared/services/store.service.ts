import axios from 'axios';

// Vite will copy this asset and return a URL to it
// so axios can fetch it like an API endpoint.
// Using ?url avoids bundling the JSON into the JS bundle.
// Path relative to this file: ../../data/medical_categories.json
// We rely on Vite static asset handling.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - vite's ?url import provides a string URL at runtime
import dataUrl from '../../data/medical_categories.json?url';

export type StoreProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
};

export type StoreSubCategory = {
  id: string;
  name: string;
  image: string;
  products: StoreProduct[];
};

export type StoreCategory = {
  id: string;
  name: string;
  image: string;
  subCategories: StoreSubCategory[];
};

export async function fetchStoreCategories(): Promise<StoreCategory[]> {
  const response = await axios.get<StoreCategory[]>(dataUrl, {
    headers: { 'Accept': 'application/json' },
  });
  return response.data;
}

export async function fetchCategoryById(categoryId: string): Promise<StoreCategory | undefined> {
  const categories = await fetchStoreCategories();
  return categories.find(c => c.id === categoryId);
}

export async function fetchSubCategoryById(categoryId: string, subCategoryId: string): Promise<StoreSubCategory | undefined> {
  const category = await fetchCategoryById(categoryId);
  return category?.subCategories.find(s => s.id === subCategoryId);
}

export async function searchProducts(query: string): Promise<StoreProduct[]> {
  const categories = await fetchStoreCategories();
  const q = query.trim().toLowerCase();
  const results: StoreProduct[] = [];
  for (const cat of categories) {
    for (const sub of cat.subCategories) {
      for (const p of sub.products) {
        if (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
          results.push(p);
        }
      }
    }
  }
  return results;
}


