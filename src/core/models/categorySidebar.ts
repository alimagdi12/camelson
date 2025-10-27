export interface Category {
  id: number;
  title: string;
  items: number;
  image: string;
}

export interface CategorySidebarProps {
  title?: string; // e.g. "Subcategory"
  categories: Category[];
  defaultSelectedId?: number;
  showSearch?: boolean;
  onCategorySelect?: (category: Category) => void;
  searchPlaceholder?: string;
}
