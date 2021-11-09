export default function nativeSmoothScroll() {
    if (typeof window !== `undefined`) {
      const userPlatform = window?.navigator?.userAgentData?.platform || window?.navigator?.platform || 'disable-smooth-scroll';
      const nativeSmoothScrollPlatforms = ['Macintosh', 'macOS', 'iPhone', 'iPad', 'MacIntel', 'iPod'];
      return nativeSmoothScrollPlatforms.includes(userPlatform)
    }
    return true
  }