import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const MoneyHand = ({ size, color, ...props }: CustomIconProps) => (
  <Icon size={size} color={color} {...props}>
    <path
      d="M6.24951 2C5.00687 2 3.99951 3.00736 3.99951 4.25V19.75C3.99951 20.9926 5.00687 22 6.24951 22H13.75C14.9855 22 15.9885 21.0041 15.9999 19.7712L16.0002 19.7501V18.2501C16.0002 17.8359 15.6644 17.5001 15.2502 17.5001C14.7963 17.5001 14.5108 17.378 14.3133 17.2193C14.1053 17.052 13.9338 16.794 13.8023 16.4301C13.5297 15.6751 13.5002 14.6796 13.5002 13.75C13.5001 13.5601 13.428 13.3772 13.2984 13.2384C13.2222 13.1566 13.1709 13.1012 13.134 13.0614C13.0436 12.9637 13.0394 12.9591 12.9635 12.8877C12.8896 12.8182 12.6639 12.6027 11.7805 11.7197C11.312 11.2514 11.0522 10.8551 10.9672 10.5524C10.9283 10.4137 10.9303 10.3102 10.9517 10.2269C10.9729 10.1443 11.0248 10.0358 11.1563 9.90425C11.2877 9.77277 11.396 9.72105 11.4781 9.70003C11.5609 9.67883 11.664 9.67686 11.8024 9.7159C12.1049 9.80123 12.5009 10.0615 12.9696 10.5305C13.5092 11.0704 14.022 11.5775 14.4813 12.0318C15.2408 12.7828 15.8549 13.3901 16.2019 13.7619C16.4845 14.0647 16.9591 14.081 17.2619 13.7984C17.5647 13.5158 17.5811 13.0412 17.2985 12.7384C17.014 12.4335 16.5566 11.9759 15.9997 11.424L15.9997 8.06031L18.841 10.9017C19.2629 11.3236 19.5 11.8959 19.5 12.4926V21.25C19.5 21.6642 19.8358 22 20.25 22C20.6642 22 21 21.6642 21 21.25V12.4926C21 11.4981 20.6049 10.5443 19.9017 9.84099L15.9996 5.93894L15.9996 4.24994C15.9995 3.00732 14.9922 2 13.7496 2H6.24951ZM12.3915 16.9396C12.4884 17.2077 12.6132 17.4738 12.7753 17.7218C12.0208 18.085 11.5002 18.8568 11.5002 19.7502V20.5H8.50016V19.7502C8.50016 18.5075 7.4928 17.5002 6.25016 17.5002H5.49951V6.49967H6.25016C7.4928 6.49967 8.50016 5.49231 8.50016 4.24967V3.5H11.5002V4.24967C11.5002 5.49231 12.5075 6.49967 13.7502 6.49967H14.4996L14.4997 9.9381C14.3452 9.7844 14.1885 9.62819 14.0306 9.47019C13.4996 8.93877 12.8823 8.46195 12.2096 8.27222C11.8603 8.17373 11.4853 8.14976 11.1059 8.24692C10.88 8.30478 10.669 8.40139 10.4735 8.53167C10.3186 8.51073 10.1606 8.49991 9.99996 8.49991C8.06697 8.49991 6.49996 10.0669 6.49996 11.9999C6.49996 13.9329 8.06697 15.4999 9.99996 15.4999C10.7541 15.4999 11.4524 15.2614 12.0238 14.8558C12.0607 15.54 12.1544 16.2829 12.3915 16.9396ZM7.99996 11.9999C7.99996 11.0842 8.61543 10.3121 9.45528 10.075C9.4134 10.3784 9.44404 10.6764 9.52305 10.9578C9.7121 11.6312 10.1883 12.2491 10.7201 12.7806C11.0018 13.0622 11.2181 13.2773 11.3851 13.4427C11.0257 13.7878 10.5376 13.9999 9.99996 13.9999C8.89539 13.9999 7.99996 13.1045 7.99996 11.9999ZM5.49951 4.25C5.49951 3.83579 5.8353 3.5 6.24951 3.5H7.00016V4.24967C7.00016 4.66389 6.66438 4.99967 6.25016 4.99967H5.49951V4.25ZM13.0002 3.5H13.7496C14.1638 3.5 14.4995 3.83577 14.4996 4.24998L14.4996 4.99967H13.7502C13.336 4.99967 13.0002 4.66389 13.0002 4.24967V3.5ZM14.4999 19.0002L14.5 19.75C14.5 20.1642 14.1642 20.5 13.75 20.5H13.0002V19.7502C13.0002 19.3359 13.336 19.0002 13.7502 19.0002H14.4999ZM7.00016 20.5H6.24951C5.8353 20.5 5.49951 20.1642 5.49951 19.75V19.0002H6.25016C6.66438 19.0002 7.00016 19.3359 7.00016 19.7502V20.5Z"
      fill="currentColor"
    />
  </Icon>
)