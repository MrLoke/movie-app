import { ChangeEvent, FormEvent } from 'react'
import { useRecoilState } from 'recoil'
import { searchInputState } from 'atoms/searchInputAtom'
import { Box, IconButton, Input } from 'theme-ui'
import { useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchInput = () => {
  const [searchInput, setSearchInput] = useRecoilState(searchInputState)
  const navigate = useNavigate()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSubmitForm = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    navigate('search')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmitForm}
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Input
        sx={{
          outline: 'none',
          background: 'background',
          border: '2px solid',
          color: 'text',
          borderRadius: '6px',
          paddingRight: '40px',
          paddingY: '10px',
          ':focus': {
            borderColor: 'accent',
          },
        }}
        placeholder="Search movie"
        defaultValue={searchInput}
        onChange={handleInputChange}
      />
      <IconButton
        type="submit"
        sx={{
          padding: '0 5px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          background: 'background',
          marginLeft: '-35px',
          borderLeft: '1px solid #111',
          borderRadius: 0,
        }}
      >
        <AiOutlineSearch color="#111" size="40px" />
      </IconButton>
    </Box>
  )
}

export default SearchInput
