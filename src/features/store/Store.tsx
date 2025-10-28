import { categoryImg, searchIcon } from "../../assets";
import "./Store.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";
import { usePageWidth } from "../../shared/shared.service";
import CategoryCard from "../../shared/components/card/Card";
import {
  fetchStoreCategories,
  type StoreCategory,
} from "../../shared/services/store.service";
const Store = () => {
  const navigate = useNavigate();
  const { isMobile } = usePageWidth();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<StoreCategory[]>([]);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchStoreCategories();
        if (mounted) setCategories(data);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const handleCardClick = (categoryId: string) => {
    navigate(
      `/store/sub-category?categoryId=${encodeURIComponent(categoryId)}`
    );
  };

  const topFour = useMemo(() => categories.slice(0, 4), [categories]);
  const shownCategories = useMemo(() => {
    const base = activeFilter
      ? categories.filter((c) => c.id === activeFilter)
      : categories;
    const q = search.trim().toLowerCase();
    if (!q) return base;
    return base.filter((c) => c.name.toLowerCase().includes(q));
  }, [categories, search, activeFilter]);

  return (
    <div className="store-container">
      <div className="store-header d-flex w-100 gap-3">
        <div className="searchbar">
          <div className="search-icon">
            <img src={searchIcon} alt="" />
          </div>
          <input
            type="text"
            placeholder={t("search.search")}
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="categories-bar">
          <p className="categories-header">Most Searched :</p>
          {isMobile ? (
            <select
              name="top"
              id="top"
              onChange={(e) => setActiveFilter(e.target.value || null)}
              value={activeFilter ?? ""}
            >
              <option value="">{t("search.search")}</option>
              {topFour.map((c) => (
                <option className="category" key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          ) : (
            topFour.map((c) => (
              <p
                className="category"
                key={c.id}
                onClick={() => setActiveFilter(c.id)}
                style={{ cursor: "pointer" }}
              >
                {c.name}
              </p>
            ))
          )}
        </div>
      </div>

      <div className="categories">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="skeleton--card">
                <div className="skeleton--card-img"></div>
                <div className="skeleton--card-text">
                  <span className="line"></span>
                  <span className="line--sm"></span>
                </div>
              </div>
            ))
          : shownCategories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.name}
                image={category.image}
                onClick={() => handleCardClick(category.id)}
              />
            ))}
      </div>
    </div>
  );
};

export default Store;
