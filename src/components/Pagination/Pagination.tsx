import { Box, Button, Flex } from 'theme-ui'

interface PaginationProps {
  currentPage: number
  totalPages: number
  handlePageChange: (pageNumber: number) => void
}

const Pagination = ({
  currentPage,
  totalPages,
  handlePageChange,
}: PaginationProps) => {
  // The logic for generating pagination is taken from
  // https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
  const pageBuffer = 3
  const startPage = currentPage - pageBuffer
  const endPage = currentPage + pageBuffer + 1
  const range = []
  const rangeWithDots = []
  let l

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= startPage && i < endPage)) {
      range.push(i)
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === pageBuffer) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push('...')
      }
    }
    rangeWithDots.push(i)

    l = i
  }

  return (
    <Flex
      as="ul"
      sx={{
        listStyleType: 'none',
        p: 0,
        marginY: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {rangeWithDots.map((pageNumber, index) => {
        return (
          <Box key={index} as="li" mr={2}>
            <Button
              onClick={() => handlePageChange(Number(pageNumber))}
              disabled={pageNumber === '...'}
              sx={{
                cursor: 'pointer',
                ':hover': {
                  background: 'secondary',
                },
              }}
            >
              {pageNumber}
            </Button>
          </Box>
        )
      })}
    </Flex>
  )
}

export default Pagination
