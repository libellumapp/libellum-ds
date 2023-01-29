import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const Map = ({ size, color, ...props }: CustomIconProps) => (
  <Icon size={size} color={color} {...props}>
    <path
      d="M9.20313 3.99883L9.25018 3.99757L9.29593 3.99878C9.31837 4.00008 9.34085 4.00241 9.36331 4.00581L9.37939 4.00962C9.4648 4.02334 9.54967 4.05384 9.63057 4.10177L9.68244 4.13531L14.7528 7.70057L19.8198 4.13866C20.2875 3.80986 20.9213 4.10539 20.9942 4.64773L21.0011 4.75222V15.3848C21.0011 15.5941 20.9138 15.7922 20.763 15.9329L20.6824 15.9983L15.1824 19.8647C14.9155 20.0523 14.5946 20.0366 14.3546 19.8878L9.24978 16.2966L4.1801 19.8613C3.71239 20.1901 3.07865 19.8946 3.00571 19.3523L2.99878 19.2478V8.61525C2.99878 8.40593 3.08613 8.20784 3.2369 8.06708L3.31746 8.00168L8.81746 4.13531C8.88146 4.09032 8.94857 4.05702 9.01693 4.03444L9.1394 4.00643L9.20313 3.99883ZM19.5011 6.19623L15.5011 9.00814V17.8071L19.5011 14.9952V6.19623ZM8.49878 6.19288L4.49878 9.00479V17.8038L8.49878 14.9919V6.19288ZM10.0011 6.19288V14.9919L14.0011 17.8038V9.00479L10.0011 6.19288Z"
      fill="currentColor"
    />
  </Icon>
)