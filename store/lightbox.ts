import { create } from "zustand";

export type LightboxContent = {
  title: string;
  body: string;
  eyebrow?: string;
  cta?: { label: string; href: string };
} | null;

type LightboxState = {
  open: boolean;
  content: LightboxContent;
  openWith: (content: NonNullable<LightboxContent>) => void;
  close: () => void;
};

export const useLightbox = create<LightboxState>((set) => ({
  open: false,
  content: null,
  openWith: (content) => set({ open: true, content }),
  close: () => set({ open: false }),
}));
