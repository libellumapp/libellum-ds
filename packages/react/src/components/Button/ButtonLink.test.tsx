import { render } from '@testing-library/react'

import { ButtonLink } from './ButtonLink'

describe('ButtonLink', () => {
  it('should render correctly', () => {
    const { container } = render(<ButtonLink href="#">Teste</ButtonLink>)
    expect(container).toBeInTheDocument()
  })
})
