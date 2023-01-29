import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const Telegram = ({ size, ...props }: CustomIconProps) => (
  <Icon size={size} {...props}>
    <rect width="24" height="24" rx="12" fill="#5B8FE8" />
    <path
      d="M18.0903 6.46015C18.2114 6.45773 18.4791 6.48801 18.6535 6.62971C18.7694 6.73036 18.8433 6.87082 18.8606 7.02334C18.88 7.13598 18.9042 7.39395 18.8848 7.595C18.6668 9.89377 17.7197 15.4699 17.2376 18.0436C17.0342 19.1337 16.6333 19.4982 16.2445 19.5333C15.4015 19.6121 14.7608 18.9762 13.9433 18.4409C12.6643 17.6015 11.9413 17.0795 10.6998 16.2608C9.26463 15.3161 10.1948 14.7953 11.0123 13.9475C11.2267 13.7246 14.9449 10.3419 15.0176 10.0355C15.0261 9.99672 15.0346 9.8538 14.9498 9.77871C14.865 9.70362 14.739 9.72905 14.6482 9.74964C14.5198 9.77871 12.4766 11.1304 8.51856 13.8009C7.93721 14.2006 7.41278 14.3944 6.94164 14.3823C6.42327 14.3726 5.42528 14.0904 4.68284 13.8494C3.77206 13.5527 3.049 13.3964 3.11198 12.8938C3.14468 12.6322 3.5056 12.3645 4.19354 12.0908C8.43015 10.245 11.2546 9.0278 12.6692 8.44039C16.7047 6.76173 17.5441 6.46984 18.0903 6.46015Z"
      fill="white"
    />
  </Icon>
)