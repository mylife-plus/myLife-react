// memoriesSelectors.ts
import { selector } from 'recoil';
import { memoriesState } from './MemoriesAtoms';

export const favoriteMemoriesSelector = selector({
  key: 'favoriteMemoriesSelector',
  get: ({ get }) => {
    const memoriesData = get(memoriesState);
    // Filter favorite memories
    return memoriesData.data.filter(memory => memory.isFavorite);
  },
});
