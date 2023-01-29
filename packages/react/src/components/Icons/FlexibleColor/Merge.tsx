import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const Merge = ({ size, color, ...props }: CustomIconProps) => (
  <Icon size={size} color={color} {...props}>
    <path
      d="M3 6.75C3 6.33579 3.33579 6 3.75 6H7.00736C8.00192 6 8.95575 6.39509 9.65901 7.09835L12.6088 10.0481C13.2183 10.6576 14.0449 11 14.9069 11H19.4379L15.7196 7.28023C15.4267 6.98728 15.4268 6.51241 15.7198 6.21957C16.0127 5.92673 16.4876 5.92682 16.7804 6.21977L21.7785 11.2198C22.0713 11.5126 22.0713 11.9874 21.7785 12.2802L16.7804 17.2802C16.4876 17.5732 16.0127 17.5733 15.7198 17.2804C15.4268 16.9876 15.4267 16.5127 15.7196 16.2198L19.4379 12.5H14.9672C14.0764 12.5 13.2246 12.8657 12.611 13.5116L9.93081 16.3328C9.22284 17.0781 8.23998 17.5 7.21207 17.5H3.75C3.33579 17.5 3 17.1642 3 16.75C3 16.3358 3.33579 16 3.75 16H7.21207C7.82882 16 8.41853 15.7468 8.84331 15.2997L11.5235 12.4784C11.7811 12.2073 12.0674 11.9699 12.3755 11.7693C12.0783 11.5821 11.8005 11.3611 11.5481 11.1088L8.59835 8.15901C8.17639 7.73705 7.6041 7.5 7.00736 7.5H3.75C3.33579 7.5 3 7.16421 3 6.75Z"
      fill="currentColor"
    />
  </Icon>
)
