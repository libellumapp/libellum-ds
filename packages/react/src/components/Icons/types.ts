import { HTMLAttributes } from 'react'

export type CustomIconProps = {
  size?: number
  role?: string
  'aria-label'?: string
  onClick?: () => void
}

export type IconProps = HTMLAttributes<HTMLDivElement> & CustomIconProps
