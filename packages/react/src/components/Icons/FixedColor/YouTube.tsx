import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const YouTube = ({ size, ...props }: CustomIconProps) => (
  <Icon size={size} {...props}>
    <rect width="24" height="24" rx="12" fill="#FF0000" />
    <path
      d="M11.9999 6.36295C8.90432 6.36295 5.80877 6.60579 5.12853 7.09168C3.76803 8.06346 3.76803 15.9364 5.12853 16.9082C6.48901 17.88 17.5111 17.88 18.8716 16.9082C20.2321 15.9364 20.2321 8.06346 18.8716 7.09168C18.1913 6.60579 15.0956 6.36295 11.9999 6.36295ZM10.43 9.64296L14.4137 12.0001L10.43 14.3569V9.64296Z"
      fill="white"
    />
  </Icon>
)
