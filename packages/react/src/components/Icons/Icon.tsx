import { styled } from '../../styles'

import { CustomIconProps } from './types'

const IconContainer = styled('div', {
  display: 'inline-block',
  justifyContent: 'center',
  alignItems: 'center',

  width: '$$size',
  height: '$$size',
  cursor: '$$cursor',
  color: '$color-text',
})

export const Icon = ({ children, size = 24, ...props }: CustomIconProps) => {
  return (
    <IconContainer
      css={{
        $$size: `${size}px`,
        $$cursor: !props.onClick ? 'default' : 'pointer',
      }}
      {...props}
    >
      <svg
        width="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </IconContainer>
  )
}
