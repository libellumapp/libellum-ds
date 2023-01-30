import { colors } from '@libellum-ds/tokens'

import { darkMode, styled } from '../../styles'

import { IconProps } from './types'

const IconContainer = styled('div', {
  display: 'inline-block',
  justifyContent: 'center',
  alignItems: 'center',

  width: '$$size',
  height: '$$size',
  color: '$$color',
  cursor: '$$cursor',

  [`.${darkMode} &`]: {
    color: '$color-neutral-10',
  },
})

export const Icon = ({
  children,
  size = 24,
  color = colors['color-neutral-90'],
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
