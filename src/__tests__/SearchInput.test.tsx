import SearchInput from 'components/SearchInput/SearchInput'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

describe('<SearchInput />', () => {
  it('render search input', () => {
    render(
      <BrowserRouter>
        <SearchInput />
      </BrowserRouter>
    )

    const inputEl = screen.getByPlaceholderText('Search movie')

    expect(inputEl).toHaveAttribute('type', 'text')
  })

  it('change input value', async () => {
    render(
      <BrowserRouter>
        <SearchInput />
      </BrowserRouter>
    )

    const inputEl = screen.getByPlaceholderText('Search movie')
    userEvent.type(inputEl, 'Avengers')

    expect(inputEl).toHaveValue('Avengers')
  })
})
