import { atom, AtomEffect, DefaultValue } from 'recoil'

// Need to persist search value after refresh page on search route

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    })
  }

export const searchInputState = atom({
  key: 'searchInputState',
  default: '',
  effects: [localStorageEffect('search input')],
})
