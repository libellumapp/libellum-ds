import { render } from '@testing-library/react'

import { Switch } from './Switch'

describe('Switch', () => {
  xit('should render correctly', () => {
    const { container } = render(<Switch />)
    expect(container).toBeInTheDocument()
  })
})
