import { Icon } from '../Icon'
import { CustomIconProps } from '../types'

export const Messenger = ({ size, ...props }: CustomIconProps) => (
  <Icon size={size} {...props}>
    <rect width="24" height="24" rx="12" fill="url(#paint0_radial_5_14246)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.10815 11.763C4.10815 7.36526 7.55494 4.10788 12 4.10788C16.4452 4.10788 19.8919 7.36723 19.8919 11.765C19.8919 16.1627 16.4452 19.4201 12 19.4201C11.201 19.4201 10.4355 19.3136 9.71534 19.1163C9.57526 19.0788 9.42532 19.0887 9.29313 19.1479L7.72659 19.8384C7.63197 19.8801 7.52856 19.898 7.42543 19.8904C7.3223 19.8828 7.22262 19.85 7.13513 19.7949C7.04765 19.7397 6.97505 19.6639 6.92372 19.5742C6.87238 19.4844 6.84388 19.3834 6.84072 19.28L6.79732 17.8753C6.79337 17.7017 6.71445 17.5399 6.58621 17.4254C5.05124 16.0523 4.10815 14.0635 4.10815 11.763ZM9.57921 10.3247L7.26097 14.0023C7.03802 14.3555 7.47207 14.7521 7.80353 14.4995L10.2934 12.6094C10.3753 12.5472 10.4753 12.5133 10.5782 12.513C10.6811 12.5126 10.7813 12.5458 10.8636 12.6074L12.7083 13.9905C12.8392 14.0888 12.989 14.1588 13.1483 14.1963C13.3076 14.2337 13.4729 14.2378 13.6338 14.2081C13.7947 14.1784 13.9478 14.1157 14.0832 14.0239C14.2187 13.9322 14.3337 13.8133 14.4209 13.6748L16.7411 9.99917C16.9621 9.64601 16.528 9.24747 16.1966 9.50001L13.7067 11.3901C13.6247 11.4523 13.5248 11.4862 13.4219 11.4866C13.319 11.4869 13.2188 11.4538 13.1365 11.3921L11.2917 10.009C11.1609 9.91077 11.0111 9.8407 10.8518 9.80325C10.6925 9.76579 10.5272 9.76177 10.3663 9.79144C10.2053 9.8211 10.0523 9.8838 9.91685 9.97559C9.78138 10.0674 9.66642 10.1863 9.57921 10.3247Z"
      fill="white"
    />
    <defs>
      <radialGradient
        id="paint0_radial_5_14246"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4.02 23.9993) scale(26.4 26.3993)"
      >
        <stop stopColor="#0099FF" />
        <stop offset="0.6" stopColor="#A033FF" />
        <stop offset="0.9" stopColor="#FF5280" />
        <stop offset="1" stopColor="#FF7061" />
      </radialGradient>
    </defs>
  </Icon>
)