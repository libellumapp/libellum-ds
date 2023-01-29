import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const ArrowRight = ({ size, color, ...props }: CustomIconProps) => (
  <Icon size={size} color={color} {...props}>
    <path
      d="M13.2673 4.20926C12.9674 3.92357 12.4926 3.93511 12.2069 4.23504C11.9213 4.53497 11.9328 5.0097 12.2327 5.29539L18.4841 11.25H3.75C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75H18.4842L12.2327 18.7047C11.9328 18.9904 11.9213 19.4651 12.2069 19.7651C12.4926 20.065 12.9674 20.0765 13.2673 19.7908L20.6862 12.7241C20.8551 12.5632 20.9551 12.358 20.9861 12.1446C20.9952 12.0978 21 12.0495 21 12C21 11.9504 20.9952 11.902 20.986 11.8551C20.955 11.6419 20.855 11.4368 20.6862 11.276L13.2673 4.20926Z"
      fill="currentColor"
    />
  </Icon>
)
