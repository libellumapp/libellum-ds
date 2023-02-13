import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const YoutubeFlex = ({ size, ...props }: CustomIconProps) => (
  <Icon size={size} {...props}>
    <rect width="24" height="24" rx="12" fill="#F2F2F2" />
    <path
      d="M11.9997 6.36304C8.90407 6.36304 5.80853 6.60588 5.12828 7.09177C3.76779 8.06355 3.76779 15.9365 5.12828 16.9083C6.48877 17.8801 17.5108 17.8801 18.8713 16.9083C20.2318 15.9365 20.2318 8.06355 18.8713 7.09177C18.1911 6.60588 15.0953 6.36304 11.9997 6.36304ZM10.4298 9.64306L14.4135 12.0001L10.4298 14.357V9.64306Z"
      fill="currentColor"
    />
  </Icon>
)
