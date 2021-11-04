import create from 'zustand'

export const useStore = create(set => ({
    scrollerObject: '',
    setScrollerObject: (x) => set(state=> ({scrollerObject: x})),
    isScrolling: false,
    setIsScrolling: (x) => set(state=> ({isScrolling: x})),
    isBlurred: false,
    setIsBlurred: (x) => set(state=> ({isBlurred: x})),
}))
