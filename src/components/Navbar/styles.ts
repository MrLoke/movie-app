export const styles = {
  container: {
    top: '0',
    background: 'primary',
    flex: 3,
    display: 'flex',
    alignItems: 'space-around',
    color: '#fff',
    zIndex: 2,
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '15px 0',
  },
  navbarGroup: {
    display: 'none',
    '@media screen and (min-width: 640px)': {
      display: 'flex',
      listStyle: 'none',
    },
  },
  navItem: {
    padding: '5px 0px',
  },
  navLink: {
    display: 'block',
    padding: '10px 15px',
    textDecoration: 'none',
    color: '#fff',
    transition: 'all 0.1s ease-in',

    '&:hover': {
      background: 'secondary',
      color: '#fff',
    },
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
  },
}
