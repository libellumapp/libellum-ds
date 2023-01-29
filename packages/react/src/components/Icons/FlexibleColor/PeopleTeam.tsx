import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const PeopleTeam = ({ size, color, ...props }: CustomIconProps) => (
  <Icon size={size} color={color} {...props}>
    <path
      d="M14.754 10C15.7205 10 16.504 10.7835 16.504 11.75V16.499C16.504 18.9848 14.4888 21 12.003 21C9.51712 21 7.50193 18.9848 7.50193 16.499V11.75C7.50193 10.7835 8.28543 10 9.25193 10H14.754ZM14.754 11.5H9.25193C9.11386 11.5 9.00193 11.6119 9.00193 11.75V16.499C9.00193 18.1564 10.3455 19.5 12.003 19.5C13.6604 19.5 15.004 18.1564 15.004 16.499V11.75C15.004 11.6119 14.8921 11.5 14.754 11.5ZM3.75 10L7.13128 9.99906C6.78791 10.4145 6.56424 10.9325 6.51312 11.5002L3.75 11.5C3.61193 11.5 3.5 11.6119 3.5 11.75V14.9988C3.5 16.3802 4.61984 17.5 6.00124 17.5C6.20123 17.5 6.39574 17.4765 6.58216 17.4322C6.66687 17.9361 6.82156 18.4167 7.03487 18.864C6.70577 18.953 6.35899 19 6.00124 19C3.79142 19 2 17.2086 2 14.9988V11.75C2 10.7835 2.7835 10 3.75 10ZM16.8747 9.99906L20.25 10C21.2165 10 22 10.7835 22 11.75V15C22 17.2091 20.2091 19 18 19C17.6436 19 17.298 18.9534 16.9691 18.8659C17.184 18.4177 17.3388 17.9371 17.425 17.4331C17.6092 17.477 17.8019 17.5 18 17.5C19.3807 17.5 20.5 16.3807 20.5 15V11.75C20.5 11.6119 20.3881 11.5 20.25 11.5L17.4928 11.5002C17.4417 10.9325 17.218 10.4145 16.8747 9.99906ZM12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3ZM18.5 4C19.8807 4 21 5.11929 21 6.5C21 7.88071 19.8807 9 18.5 9C17.1193 9 16 7.88071 16 6.5C16 5.11929 17.1193 4 18.5 4ZM5.5 4C6.88071 4 8 5.11929 8 6.5C8 7.88071 6.88071 9 5.5 9C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4ZM12 4.5C11.1716 4.5 10.5 5.17157 10.5 6C10.5 6.82843 11.1716 7.5 12 7.5C12.8284 7.5 13.5 6.82843 13.5 6C13.5 5.17157 12.8284 4.5 12 4.5ZM18.5 5.5C17.9477 5.5 17.5 5.94772 17.5 6.5C17.5 7.05228 17.9477 7.5 18.5 7.5C19.0523 7.5 19.5 7.05228 19.5 6.5C19.5 5.94772 19.0523 5.5 18.5 5.5ZM5.5 5.5C4.94772 5.5 4.5 5.94772 4.5 6.5C4.5 7.05228 4.94772 7.5 5.5 7.5C6.05228 7.5 6.5 7.05228 6.5 6.5C6.5 5.94772 6.05228 5.5 5.5 5.5Z"
      fill="currentColor"
    />
  </Icon>
)
