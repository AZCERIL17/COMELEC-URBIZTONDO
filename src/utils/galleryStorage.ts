import { useState, useEffect } from "react";
import { IMAGES } from "../data/assets";

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  title: string;
  subtitle: string;
  src: string;
  desc?: string;
  isCustom?: boolean;
}

const STORAGE_KEY = "comelec_gallery_items_v1";

export const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    type: "image",
    title: "Voter Education 2026",
    subtitle: "Community outreach",
    src: IMAGES.galleryVoterEdu,
    desc: "Civic orientation on voting rights, anti-vote buying regulations, and youth voter awareness across Urbiztondo communities.",
  },
  {
    id: "gal-2",
    type: "image",
    title: "BSKE Preparation",
    subtitle: "Poll readiness",
    src: IMAGES.galleryPrecinct,
    desc: "Inspection and clustering of polling places and verification of ballot security measures with DepEd and PNP personnel.",
  },
  {
    id: "gal-3",
    type: "image",
    title: "Urbiztondo Municipal Hall",
    subtitle: "Office of the Election Officer",
    src: IMAGES.galleryHall,
    desc: "Municipal Hall Building in Poblacion, Urbiztondo, Pangasinan — home of the COMELEC Municipal Election Office providing frontline voter services without noon break.",
  },
  {
    id: "gal-4",
    type: "image",
    title: "Barangay Assembly",
    subtitle: "Grassroots engagement",
    src: IMAGES.galleryVoterEdu,
    desc: "Grassroots consultations with barangay chairpersons, youth leaders, and civil society organizations in District 2.",
  },
];

export function useGallery() {
  const [items, setItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to load gallery from localStorage", e);
    }
    return DEFAULT_GALLERY_ITEMS;
  });

  const saveItems = (newItems: GalleryItem[]) => {
    setItems(newItems);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
    } catch (e) {
      console.warn("Storage quota may be reached for gallery media; keeping in active memory", e);
    }
  };

  const addItem = (item: Omit<GalleryItem, "id" | "isCustom">) => {
    const newItem: GalleryItem = {
      ...item,
      id: `custom-${Date.now()}`,
      isCustom: true,
    };
    saveItems([newItem, ...items]);
  };

  const updateItem = (id: string, updatedFields: Partial<GalleryItem>) => {
    saveItems(
      items.map((it) => (it.id === id ? { ...it, ...updatedFields, isCustom: true } : it))
    );
  };

  const removeItem = (id: string) => {
    saveItems(items.filter((it) => it.id !== id));
  };

  const resetGallery = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setItems(DEFAULT_GALLERY_ITEMS);
  };

  const hasCustomItems = items.some((it) => it.isCustom) || items.length !== DEFAULT_GALLERY_ITEMS.length;

  return {
    items,
    addItem,
    updateItem,
    removeItem,
    resetGallery,
    hasCustomItems,
  };
}
