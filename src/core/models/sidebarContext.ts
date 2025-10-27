import type { Category } from "./categorySidebar";

// Re-export Category for easier imports
export type { Category };

// Simple content interface
export interface Content {
  id: string;
  title: string;
  description: string;
  image?: string;
}

// Context state interface
export interface SidebarContextState {
  selectedCategory: Category | null;
  content: Content | null;
}

// Context actions interface
export interface SidebarContextActions {
  selectCategory: (category: Category) => void;
  setContent: (content: Content) => void;
  clearContent: () => void;
}

// Combined context type
export type SidebarContextType = SidebarContextState & SidebarContextActions;
