// recoilRoot.tsx
import { atom, selector } from 'recoil';
import { profileState } from './Profile/ProfileAtoms';
import { settingsState } from './Settings/SettingsAtoms';
import { memoriesState } from './Memories/MemoriesAtoms';
import { profileInfoSelector } from './Profile/ProfileSelectors';
import { userSettingsSelector } from './Settings/SettingsSelectors';
import { favoriteMemoriesSelector } from './Memories/MemoriesSelectors';
import { appConfigSelector } from './App/AppSelectors';
import { appConfigState } from './App/AppAtoms';

export const appState = {
  profile: {
    profileState,
    profileInfoSelector,
  },
  settings: {
    settingsState,
    userSettingsSelector,
  },
  memories: {
    memoriesState,
    favoriteMemoriesSelector,
  },
  appConfig : {
    appConfigState,
    appConfigSelector
  }
};
