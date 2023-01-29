import { styled } from '../../styles'

import { IconProps } from './types'

const IconContainer = styled('div', {
  display: 'inline-block',
  justifyContent: 'center',
  alignItems: 'center',

  width: '$$size',
  height: '$$size',
  color: '$$color',
  cursor: '$$cursor',
})

export const Icon = ({
  children,
  size = 24,
  color = '#000',
  ...props
}: IconProps) => {
  return (
    <IconContainer
      css={{
        $$size: `${size}px`,
        $$color: color,
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
