// This function concatenate id's to api url like this: &with_genres=10,20,30
const concatenateGenre = (selectedGenres: any[]) => {
  if (selectedGenres.length < 1) return ''
  const GenreIds = selectedGenres.map((g: { id: any }) => g.id)
  return GenreIds.reduce((acc: string, curr: string) => acc + ',' + curr)
}

export default concatenateGenre
