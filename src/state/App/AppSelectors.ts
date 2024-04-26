import { selector, useRecoilState } from 'recoil';
import { AppConfig, appConfigState } from './AppAtoms';

export const appConfigSelector = selector<AppConfig>({
  key: 'appConfigSelector',
  get: ({ get }) => {
    const appConfig = get(appConfigState);
    return appConfig;
  },
});

export const useAppState = () => {
  const [appConfig, setAppConfig] = useRecoilState(appConfigState);

  const setAppState = (newState: string) => {
    setAppConfig((prevConfig) => ({
      ...prevConfig,
      appState: newState,
    }));
  };

  return { appConfig, setAppState };
};
