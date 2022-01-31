import Navbar from 'components/Navbar/Navbar'
import FavouritePage from 'pages/FavouritePage/FavouritePage'
import HomePage from 'pages/HomePage/HomePage'
import MoviePage from 'pages/MoviePage/MoviePage'
import WatchlistPage from 'pages/WatchlistPage/WatchlistPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from 'theme/GlobalStyles'

const AppRoutes = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movie/:name" element={<MoviePage />} />
          <Route path="watchlist" element={<WatchlistPage />} />
          <Route path="favourite" element={<FavouritePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRoutes
