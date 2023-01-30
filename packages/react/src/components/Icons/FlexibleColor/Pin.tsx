import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const Pin = ({ size, ...props }: CustomIconProps) => (
  <Icon size={size} {...props}>
    <path
      d="M16.2425 2.93189L21.0682 7.75765C22.3955 9.08491 22.0324 11.3224 20.3535 12.1619L15.4826 14.5973C15.3073 14.685 15.1732 14.8379 15.1092 15.0232L13.6699 19.1895C13.3684 20.0622 12.2574 20.3181 11.6045 19.6653L8.50002 16.5607L4.06074 21.0001H3L3.00008 19.9394L7.43936 15.5001L4.33487 12.3956C3.682 11.7427 3.93791 10.6317 4.81061 10.3302L8.97688 8.89096C9.16223 8.82694 9.31512 8.69287 9.40281 8.51748L11.8382 3.6466C12.6777 1.96772 14.9152 1.60462 16.2425 2.93189ZM20.0076 8.81831L15.1818 3.99255C14.5785 3.38924 13.5614 3.55429 13.1799 4.31742L10.7445 9.18829C10.4814 9.71446 10.0227 10.1167 9.46666 10.3087L5.67812 11.6175L12.3826 18.322L13.6914 14.5335C13.8835 13.9774 14.2857 13.5188 14.8118 13.2557L19.6827 10.8202C20.4458 10.4387 20.6109 9.42161 20.0076 8.81831Z"
      fill="currentColor"
    />
  </Icon>
)
