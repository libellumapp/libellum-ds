import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const ArrowTrening = ({ size, ...props }: CustomIconProps) => (
  <Icon size={size} {...props}>
    <path
      d="M13.7482 5.5L21.302 5.50052L21.4022 5.51444L21.5011 5.54205L21.5613 5.5676C21.6406 5.60246 21.7148 5.65315 21.78 5.71836L21.8207 5.7624L21.8643 5.81878L21.9184 5.9089L21.9571 5.99922L21.9763 6.0633L21.9899 6.1273L21.9992 6.2215L21.9997 13.7539C21.9997 14.1681 21.6639 14.5039 21.2497 14.5039C20.87 14.5039 20.5562 14.2217 20.5066 13.8557L20.4997 13.7539L20.4993 8.059L12.7804 15.7793C12.5142 16.0455 12.0975 16.0698 11.8039 15.8519L11.7198 15.7793L8.74928 12.8089L3.2796 18.2786C2.9867 18.5715 2.51183 18.5715 2.21894 18.2786C1.95267 18.0123 1.92846 17.5957 2.14632 17.3021L2.21894 17.2179L8.21894 11.2179C8.4852 10.9517 8.90186 10.9275 9.19547 11.1453L9.27959 11.2179L12.2501 14.1883L19.4373 7H13.7482C13.3685 7 13.0547 6.71785 13.005 6.35177L12.9982 6.25C12.9982 5.8703 13.2803 5.55651 13.6464 5.50685L13.7482 5.5Z"
      fill="currentColor"
    />
  </Icon>
)
