export default function isMobile() {
  if (typeof window !== `undefined`) {
    const userPlatform = window?.navigator?.maxTouchPoints; // || window?.screen?.orientation || 'disable-smooth-scroll';
    return userPlatform
  }
  return false
  }