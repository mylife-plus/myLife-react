// profileSelectors.ts
import { selector } from 'recoil';
import { profileState } from './ProfileAtoms';

export const profileInfoSelector = selector({
  key: 'profileInfoSelector',
  get: ({ get }) => {
    const profileData = get(profileState);
    // Perform computations or transformations here if needed
    return profileData;
  },
});
