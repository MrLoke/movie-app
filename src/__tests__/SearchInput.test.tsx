import SearchInput from 'components/SearchInput/SearchInput'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

beforeEach(() => {
  render(
    <BrowserRouter>
      <SearchInput />
    </BrowserRouter>
  )
})

describe('<SearchInput />', () => {
  it('render search input', () => {
    const inputEl = screen.getByPlaceholderText('Search movie')

    expect(inputEl).toHaveAttribute('type', 'text')
  })

  it('change input value', async () => {
    const inputEl = screen.getByPlaceholderText('Search movie')
    userEvent.type(inputEl, 'Avengers')

    expect(inputEl).toHaveValue('Avengers')
  })
})
