/** @jsxImportSource theme-ui */
import SearchInput from 'components/SearchInput/SearchInput'
import { useState } from 'react'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import { Box, MenuButton, Close, Flex } from 'theme-ui'
import { styles } from './styles'

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link
      style={{
        textDecoration: match ? 'underline' : 'none',
        fontWeight: match ? '500' : '400',
        color: '#fff',
        padding: '10px 15px',
        transition: 'all 0.1s ease-in',
      }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

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

        <Flex as="ul" sx={styles.navbarGroup}>
          {navLinks.map((item) => (
            <Box as="li" sx={styles.navItem} key={item.url}>
              <CustomLink to={item.url}>{item.name}</CustomLink>
            </Box>
          ))}
        </Flex>

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
        <Flex
          as="ul"
          sx={{
            flexDirection: 'column',
            background: 'primary',
          }}
        >
          {navLinks.map((item) => (
            <Box as="li" sx={styles.navItem} key={item.url}>
              <CustomLink to={item.url}>{item.name}</CustomLink>
            </Box>
          ))}
        </Flex>
      ) : null}
    </Box>
  )
}

export default Navbar
