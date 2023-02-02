import { render } from '@testing-library/react'

import { ButtonArrow } from './ButtonArrow'

describe('ButtonArrow', () => {
  it('should render correctly', () => {
    const { container } = render(<ButtonArrow />)
    expect(container).toBeInTheDocument()
  })
})
