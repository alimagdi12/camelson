import { useEffect, useMemo, useState } from "react";
import "./Sub-category.scss";
import ProductGrid from "./components/product-grid/Product-grid";
import CategorySidebar from "../../shared/components/category-sidebar/CategorySidebar";
import { useSearchParams } from "react-router-dom";
import {
  fetchCategoryById,
  type StoreCategory,
} from "../../shared/services/store.service";
import type { Category as SidebarCategory } from "../../core/models/categorySidebar";

import lungImage from "../../assets/images/store/swiper2.jpg";

function SubCategory() {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId") || "";
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<StoreCategory | null>(null);
  const [selectedSubId, setSelectedSubId] = useState<string | null>(null);
  const [gridSearch, setGridSearch] = useState("");

  // legacy demo data removed

  // legacy helpers removed

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchCategoryById(categoryId);
        if (mounted) {
          setCategory(data ?? null);
          const firstSub = data?.subCategories?.[0]?.id || null;
          setSelectedSubId(firstSub);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [categoryId]);

  const sidebarCategories = useMemo<SidebarCategory[]>(() => {
    return (category?.subCategories || []).map((s, idx) => ({
      id: idx + 1,
      title: s.name,
      items: s.products?.length || 0,
      image: lungImage,
    }));
  }, [category]);

  // Build products for current subcategory selection
  const products = useMemo(() => {
    const sub = category?.subCategories.find(
      (s) => s.id === (selectedSubId || "")
    );
    const list = sub?.products || [];
    const q = gridSearch.trim().toLowerCase();
    const filtered = q
      ? list.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        )
      : list;
    return filtered.map((p) => ({
      image: p.images?.[0] || lungImage,
      name: p.name,
      price: `${p.price} EGP`,
    }));
  }, [category, selectedSubId, gridSearch]);

  // legacy content rendering removed

  return (
    <div className="sub-category-container">
      {loading ? (
        <div className="main-content">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="skeleton--card">
                <div className="skeleton--card-img"></div>
                <div className="skeleton--card-text">
                  <span className="line"></span>
                  <span className="line--sm"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <ProductGrid products={products} onSearchChange={setGridSearch} />
      )}

      <div className="category-sidebar-container">
        {loading ? (
          <div className="skeleton--card">
            <div className="skeleton--card-text">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="line"></span>
              ))}
            </div>
          </div>
        ) : (
          <CategorySidebar
            title="Subcategory"
            categories={sidebarCategories}
            defaultSelectedId={undefined}
            onCategorySelect={(c: SidebarCategory) => {
              // original comp uses numeric ids; we pass through name match
              const match = (category?.subCategories || []).find(
                (s) => s.name === c.title
              );
              if (match) setSelectedSubId(match.id);
            }}
            showSearch={true}
            searchPlaceholder="Search subcategory..."
          />
        )}
      </div>
    </div>
  );
}

export default SubCategory;
