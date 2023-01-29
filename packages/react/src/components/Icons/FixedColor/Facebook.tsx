import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const Facebook = ({ size, ...props }: CustomIconProps) => (
  <Icon size={size} {...props}>
    <rect width="24" height="24" rx="12" fill="#1977F3" />
    <path
      d="M16.3454 16.1259L16.8632 12.8679H13.6215V10.7539C13.6215 9.86333 14.0735 8.99331 15.5266 8.99331H17V6.22027C17 6.22027 15.662 6 14.3829 6C11.7133 6 9.96763 7.55922 9.96763 10.3846V12.8679H7V16.1259H9.9688V24H13.6215V16.1259H16.3454Z"
      fill="white"
    />
  </Icon>
)
