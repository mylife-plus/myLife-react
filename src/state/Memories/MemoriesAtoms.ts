// memoriesAtoms.ts
import { atom } from 'recoil';

export const memoriesState = atom({
  key: 'memoriesState',
  default:{ userId: 0, data : [
    {
      id: 1,
      title: "First Memory",
      date: "2023-01-01",
      isFavorite: false,
    },
  ],} // Import defaultMemoriesData from memoriesDefaultData.ts
});
