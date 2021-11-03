import create from 'zustand'

export const useStore = create(set => ({
    scrollerObject: '',
    setScrollerObject: (x) => set(state=> ({scrollerObject: x}))
}))
