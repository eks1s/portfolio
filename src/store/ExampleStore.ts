import { create } from 'zustand';

interface IExampleStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

const useStore = create<IExampleStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
