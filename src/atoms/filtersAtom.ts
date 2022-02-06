import { atom } from 'recoil'

export const genresState = atom({
  key: 'genresState',
  default: [],
})

export const releaseYearState = atom({
  key: 'releaseYearState',
  default: '',
})
