// settingsSelectors.ts
import { selector } from 'recoil';
import { settingsState } from './SettingsAtoms';

export const userSettingsSelector = selector({
  key: 'userSettingsSelector',
  get: ({ get }) => {
    const settingsData = get(settingsState);
    // Perform computations or transformations here if needed
    return settingsData;
  },
});
