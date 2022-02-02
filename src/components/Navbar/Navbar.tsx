/** @jsxImportSource theme-ui */
import SearchInput from 'components/SearchInput/SearchInput'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, MenuButton, Close } from 'theme-ui'
import { styles } from './styles'

const navLinks = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Watch list',
    url: '/watchlist',
  },
  {
    name: 'Favourite',
    url: '/favourite',
  },
]

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)

  return (
    <Box
      as="nav"
      sx={{
        ...styles.container,
        position: 'sticky',
        flexDirection: 'column',
      }}
    >
      <Box sx={styles.navContainer}>
        <Box
          sx={{
            display: 'none',
            '@media screen and (min-width: 400px)': {
              display: 'flex',
            },
          }}
        >
          <h3>Movie App</h3>
        </Box>

        <Box as="ul" sx={styles.navbarGroup}>
          {navLinks.map((item) => (
            <Box as="li" sx={styles.navItem} key={item.url}>
              <NavLink to={item.url} sx={styles.navLink}>
                {item.name}
              </NavLink>
            </Box>
          ))}
        </Box>

        <SearchInput />

        {showMobileMenu ? (
          <Close
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            sx={{
              '@media screen and (min-width: 640px)': {
                display: 'none',
              },
            }}
          />
        ) : (
          <MenuButton
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            sx={{
              '@media screen and (min-width: 640px)': {
                display: 'none',
              },
            }}
          />
        )}
      </Box>

      {/* Conditional render mobile menu */}
      {showMobileMenu ? (
        <Box
          as="ul"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            background: 'primary',
          }}
        >
          {navLinks.map((item) => (
            <Box as="li" sx={styles.navItem} key={item.url}>
              <NavLink to={item.url} sx={styles.navLink}>
                {item.name}
              </NavLink>
            </Box>
          ))}
        </Box>
      ) : null}
    </Box>
  )
}

export default Navbar
