import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const Linkedin = ({ size, ...props }: CustomIconProps) => (
  <Icon size={size} {...props}>
    <rect width="24" height="24" rx="4" fill="#006699" />
    <path
      d="M8.75773 8.7H5.74227C5.60844 8.7 5.5 8.80452 5.5 8.93341V18.2666C5.5 18.3955 5.60844 18.5 5.74227 18.5H8.75773C8.89156 18.5 9 18.3955 9 18.2666V8.93341C9 8.80452 8.89156 8.7 8.75773 8.7Z"
      fill="white"
    />
    <path
      d="M15.9486 8.7C14.8326 8.7 14.0077 9.19 13.5073 9.74677V9.15462C13.5073 9.02871 13.4074 8.9266 13.2841 8.9266H10.6232C10.4999 8.9266 10.4 9.02871 10.4 9.15462V18.2719C10.4 18.3979 10.4999 18.5 10.6232 18.5H13.3956C13.5189 18.5 13.6189 18.3979 13.6189 18.2719V13.761C13.6189 12.2409 14.0231 11.6487 15.0605 11.6487C16.1903 11.6487 16.2801 12.5981 16.2801 13.8392V18.272C16.2801 18.3979 16.38 18.5 16.5033 18.5H19.2768C19.4001 18.5 19.5 18.3979 19.5 18.272V13.271C19.5 11.0107 19.078 8.7 15.9486 8.7Z"
      fill="white"
    />
    <path
      d="M7.2507 4.5C6.28536 4.5 5.5 5.28489 5.5 6.24964C5.5 7.21481 6.28536 8 7.2507 8C8.21528 8 9 7.21477 9 6.24964C9.00004 5.28489 8.21528 4.5 7.2507 4.5Z"
      fill="white"
    />
  </Icon>
)
