import { atom } from 'recoil'

export const genresState = atom({
  key: 'genresState',
  default: Array(), // such a notation instead of [] because some TS compilator error with type never in FiltersMovie component
})

export const releaseYearState = atom({
  key: 'releaseYearState',
  default: '',
})
