export default function isMobile() {
    const userPlatform = window?.navigator?.maxTouchPoints; // || window?.screen?.orientation || 'disable-smooth-scroll';
    return userPlatform
  }