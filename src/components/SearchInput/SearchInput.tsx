import { ChangeEvent, FormEvent } from 'react'
import { useRecoilState } from 'recoil'
import { searchInputState } from 'atoms/searchInputAtom'
import { Box, Button, Input } from 'theme-ui'
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
      }}
    >
      <Input
        sx={{
          outline: 'none',
          background: 'background',
          border: '2px solid #64748b',
          color: 'text',
          borderRadius: '6px',
        }}
        placeholder="Search movie"
        defaultValue={searchInput}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        sx={{
          padding: '0 5px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          background: 'background',
        }}
      >
        <AiOutlineSearch color="#111" size="35px" />
      </Button>
    </Box>
  )
}

export default SearchInput
