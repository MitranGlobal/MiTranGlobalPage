import { create } from "zustand";

/** Open/close state for the full-screen quiz popup (components/quiz/QuizModal). */
type QuizState = {
  open: boolean;
  show: () => void;
  hide: () => void;
};

export const useQuiz = create<QuizState>((set) => ({
  open: false,
  show: () => set({ open: true }),
  hide: () => set({ open: false }),
}));
