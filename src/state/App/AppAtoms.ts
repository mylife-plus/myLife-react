import { atom } from 'recoil';
import { NavigationState } from '../../navigation/state';

export interface AppConfig {
  theme: string;
  language: string;
  notifications: boolean;
  appState : string;
}

export const appConfigState = atom<AppConfig>({
  key: 'appConfigState',
  default: {
    theme: 'light',
    language: 'en',
    notifications: true,
    appState : "Login",
  },
});
