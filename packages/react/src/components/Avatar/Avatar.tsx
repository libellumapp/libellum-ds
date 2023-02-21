import { ComponentProps } from 'react'

import { Person } from '../Icons'

import { AvatarContainer, AvatarFallback, AvatarImage } from './Avatar.styles'

export type AvatarProps = ComponentProps<typeof AvatarImage>

export const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <Person role="img" aria-label="undefined avatar image" />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
