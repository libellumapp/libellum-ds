import { HTMLAttributes } from 'react'

export type CustomIconProps = {
  size?: number
  onClick?: () => void
}

export type IconProps = HTMLAttributes<HTMLDivElement> & CustomIconProps
