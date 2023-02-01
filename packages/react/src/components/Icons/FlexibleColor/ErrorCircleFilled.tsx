import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const ErrorCircleFilled = ({ size, ...props }: CustomIconProps) => (
  <Icon size={size} {...props}>
    <path
      d="M12 3C16.9707 3 21 7.0302 21 12C21 16.9698 16.9707 21 12 21C7.0293 21 3 16.9698 3 12C3 7.0302 7.0293 3 12 3ZM12.0016 14.7034C11.5052 14.7034 11.1028 15.1058 11.1028 15.6021C11.1028 16.0985 11.5052 16.5009 12.0016 16.5009C12.498 16.5009 12.9004 16.0985 12.9004 15.6021C12.9004 15.1058 12.498 14.7034 12.0016 14.7034ZM11.9997 7.5C11.5381 7.50017 11.1578 7.84774 11.106 8.29536L11.1 8.40032L11.1016 12.9011L11.1077 13.0061C11.1599 13.4537 11.5404 13.801 12.0019 13.8008C12.4635 13.8006 12.8438 13.4531 12.8956 13.0054L12.9016 12.9005L12.9 8.39968L12.8939 8.29472C12.8418 7.84713 12.4612 7.49983 11.9997 7.5Z"
      fill="currentColor"
    />
  </Icon>
)
