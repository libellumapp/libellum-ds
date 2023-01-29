import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const Payment = ({ size, color, ...props }: CustomIconProps) => (
  <Icon size={size} color={color} {...props}>
    <path
      d="M15.75 14.5C15.3358 14.5 15 14.8358 15 15.25C15 15.6642 15.3358 16 15.75 16H18.25C18.6642 16 19 15.6642 19 15.25C19 14.8358 18.6642 14.5 18.25 14.5H15.75ZM4.75 5C3.23122 5 2 6.23122 2 7.75V16.25C2 17.7688 3.23122 19 4.75 19H19.25C20.7688 19 22 17.7688 22 16.25V7.75C22 6.23122 20.7688 5 19.25 5H4.75ZM3.5 16.25V11H20.5V16.25C20.5 16.9404 19.9404 17.5 19.25 17.5H4.75C4.05964 17.5 3.5 16.9404 3.5 16.25ZM3.5 9.5V7.75C3.5 7.05964 4.05964 6.5 4.75 6.5H19.25C19.9404 6.5 20.5 7.05964 20.5 7.75V9.5H3.5Z"
      fill="currentColor"
    />
  </Icon>
)