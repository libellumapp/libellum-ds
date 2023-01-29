import { HTMLAttributes } from 'react'

export type CustomIconProps = {
  size?: number
  color?: string
  onClick?: () => void
}

export type IconProps = HTMLAttributes<HTMLDivElement> & CustomIconProps
