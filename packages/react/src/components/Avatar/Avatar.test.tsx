import { render, screen } from '@testing-library/react'

import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('should render correctly with undefined avatar image', async () => {
    render(<Avatar />)

    expect(
      await screen.findByRole('img', { name: /undefined avatar image/i })
    ).toBeInTheDocument()
  })
})
