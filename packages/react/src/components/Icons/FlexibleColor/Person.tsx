import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const Person = ({ size, color, ...props }: CustomIconProps) => (
  <Icon size={size} color={color} {...props}>
    <path
      d="M17.7543 13.9999C18.9963 13.9999 20.0032 15.0068 20.0032 16.2488V16.8242C20.0032 17.7185 19.6836 18.5833 19.1021 19.2627C17.5327 21.0962 15.1455 22.0011 12.0001 22.0011C8.85426 22.0011 6.46825 21.0959 4.90194 19.2617C4.32218 18.5827 4.00366 17.7193 4.00366 16.8265V16.2488C4.00366 15.0068 5.01052 13.9999 6.25254 13.9999H17.7543ZM17.7543 15.4999H6.25254C5.83895 15.4999 5.50366 15.8352 5.50366 16.2488V16.8265C5.50366 17.3621 5.69477 17.8802 6.04263 18.2876C7.29594 19.7553 9.26182 20.5011 12.0001 20.5011C14.7384 20.5011 16.706 19.7552 17.9625 18.2873C18.3114 17.8797 18.5032 17.3608 18.5032 16.8242V16.2488C18.5032 15.8352 18.1679 15.4999 17.7543 15.4999ZM12.0001 2.00462C14.7615 2.00462 17.0001 4.2432 17.0001 7.00462C17.0001 9.76605 14.7615 12.0046 12.0001 12.0046C9.2387 12.0046 7.00012 9.76605 7.00012 7.00462C7.00012 4.2432 9.2387 2.00462 12.0001 2.00462ZM12.0001 3.50462C10.0671 3.50462 8.50012 5.07163 8.50012 7.00462C8.50012 8.93762 10.0671 10.5046 12.0001 10.5046C13.9331 10.5046 15.5001 8.93762 15.5001 7.00462C15.5001 5.07163 13.9331 3.50462 12.0001 3.50462Z"
      fill="currentColor"
    />
  </Icon>
)