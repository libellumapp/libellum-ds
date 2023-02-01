import {
  Add,
  Alert,
  AlertOff,
  ArrowDown,
  ArrowDownload,
  ArrowLeft,
  ArrowMaximize,
  ArrowRight,
  ArrowSync,
  ArrowTrening,
  ArrowUp,
  ArrowUpload,
  Behance,
  Board,
  Calendar,
  Certificate,
  CheckMarkCircleFilled,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ClipboardSettings,
  DataUsage,
  Delete,
  Dismiss,
  DismissCircle,
  DismissCircleFilled,
  DocumentRibbon,
  ErrorCircleFilled,
  EyeOff,
  Facebook,
  Filter,
  Flag,
  Globe,
  Google,
  Heart,
  Instagram,
  Linkedin,
  List,
  Locked,
  Map,
  Merge,
  Messenger,
  MoneyHand,
  More,
  Multiselect,
  Open,
  Password,
  Payment,
  People,
  PeopleTeam,
  PeopleTeamAdd,
  Person,
  Pin,
  Pinterest,
  QRCode,
  Ribbon,
  RibbonAdd,
  RibbonOff,
  Search,
  Settings,
  Share,
  ShieldTask,
  styled,
  Telegram,
  Text,
  Twitter,
  Unlocked,
  Whatsapp,
  YouTube,
} from '@libellum-ds/react'
import { Meta, Story } from '@storybook/react'

const Main = styled('main', {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 20px',
})

const GroupIconsContainer = styled('div', {
  marginBottom: '$spacing-xl',
})

const GroupIconstTitle = styled(Text, {
  marginTop: '$spacing-sm',
})

const IconsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '10px',
  marginTop: '$spacing-md',
})

const StyledWhatsapp = styled(Whatsapp, {
  width: '48px',
  height: '48px',
})

const StyledArrowSync = styled(ArrowSync, {
  width: '48px',
  height: '48px',
  color: '$color-success-50',

  '&:hover': {
    color: '$color-theme-50',
  },
})

const StyledErrorCircleFilled = styled(ErrorCircleFilled, {
  color: '$color-error-50',
})

const StyledCheckMarkCircleFilled = styled(CheckMarkCircleFilled, {
  color: '$color-success-50',
})

const ShowRoom = () => {
  const handleIconClick = async (icon: string) => {
    const iconCode = `<${icon} />`
    await navigator.clipboard.writeText(iconCode)
    alert(`Icon code ${iconCode} has been copied to clipboard!`)
  }
  return (
    <Main>
      <Text type="display">Icons</Text>
      <Text type="caption">Click on the icon to copy the code!</Text>

      <GroupIconsContainer>
        <GroupIconstTitle type="title">
          Social Media (fixed color icons)
        </GroupIconstTitle>
        <IconsContainer>
          <Google onClick={() => handleIconClick('Google')} />
          <Whatsapp onClick={() => handleIconClick('Whatsapp')} />
          <Instagram onClick={() => handleIconClick('Instagram')} />
          <Facebook onClick={() => handleIconClick('Facebook')} />
          <Twitter onClick={() => handleIconClick('Twitter')} />
          <YouTube onClick={() => handleIconClick('Youtube')} />
          <Telegram onClick={() => handleIconClick('Telegram')} />
          <Pinterest onClick={() => handleIconClick('Pinterest')} />
          <Messenger onClick={() => handleIconClick('Messenger')} />
          <Linkedin onClick={() => handleIconClick('Linkedin')} />
          <Behance onClick={() => handleIconClick('Behance')} />
        </IconsContainer>
      </GroupIconsContainer>

      <GroupIconsContainer>
        <GroupIconstTitle type="title">
          Chevrons (flexible color icons)
        </GroupIconstTitle>
        <IconsContainer>
          <ChevronLeft onClick={() => handleIconClick('ChevronLeft')} />
          <ChevronDown onClick={() => handleIconClick('ChevronDown')} />
          <ChevronRight onClick={() => handleIconClick('ChevronRight')} />
          <ChevronUp onClick={() => handleIconClick('ChevronUp')} />
        </IconsContainer>
      </GroupIconsContainer>

      <GroupIconsContainer>
        <GroupIconstTitle type="title">
          Arrows (flexible color icons)
        </GroupIconstTitle>
        <IconsContainer>
          <ArrowLeft onClick={() => handleIconClick('ArrowLeft')} />
          <ArrowDown onClick={() => handleIconClick('ArrowDown')} />
          <ArrowRight onClick={() => handleIconClick('ArrowRight')} />
          <ArrowUp onClick={() => handleIconClick('ArrowUp')} />
        </IconsContainer>
      </GroupIconsContainer>

      <GroupIconsContainer>
        <GroupIconstTitle type="title">
          Others (flexible color icons)
        </GroupIconstTitle>
        <IconsContainer>
          <ArrowSync onClick={() => handleIconClick('ArrowSync')} />
          <ArrowUpload onClick={() => handleIconClick('ArrowUpload')} />
          <ArrowDownload onClick={() => handleIconClick('ArrowDownload')} />
          <ArrowMaximize onClick={() => handleIconClick('ArrowMaximize')} />
          <ArrowTrening onClick={() => handleIconClick('ArrowTrening')} />
          <DataUsage onClick={() => handleIconClick('DataUsage')} />
          <DocumentRibbon onClick={() => handleIconClick('DocumentRibbon')} />
          <Settings onClick={() => handleIconClick('Settings')} />
          <ClipboardSettings
            onClick={() => handleIconClick('ClipboardSettings')}
          />
          <Person onClick={() => handleIconClick('Person')} />
          <Globe onClick={() => handleIconClick('Globe')} />
          <Board onClick={() => handleIconClick('Board')} />
          <Ribbon onClick={() => handleIconClick('Ribbon')} />
          <Share onClick={() => handleIconClick('Share')} />
          <Map onClick={() => handleIconClick('Map')} />
          <People onClick={() => handleIconClick('People')} />
          <RibbonOff onClick={() => handleIconClick('RibbonOff')} />
          <Flag onClick={() => handleIconClick('Flag')} />
          <Unlocked onClick={() => handleIconClick('Unlocked')} />
          <Alert onClick={() => handleIconClick('Alert')} />
          <Certificate onClick={() => handleIconClick('Certificate')} />
          <Locked onClick={() => handleIconClick('Locked')} />
          <AlertOff onClick={() => handleIconClick('AlertOff')} />
          <RibbonAdd onClick={() => handleIconClick('RibbonAdd')} />
          <Password onClick={() => handleIconClick('Password')} />
          <Merge onClick={() => handleIconClick('Merge')} />
          <Multiselect onClick={() => handleIconClick('Multiselect')} />
          <QRCode onClick={() => handleIconClick('QRCode')} />
          <MoneyHand onClick={() => handleIconClick('MoneyHand')} />
          <List onClick={() => handleIconClick('List')} />
          <Open onClick={() => handleIconClick('Open')} />
          <PeopleTeam onClick={() => handleIconClick('PeopleTeam')} />
          <ShieldTask onClick={() => handleIconClick('ShieldTask')} />
          <Payment onClick={() => handleIconClick('Payment')} />
          <PeopleTeamAdd onClick={() => handleIconClick('PeopleTeamAdd')} />
          <Delete onClick={() => handleIconClick('Delete')} />
          <Calendar onClick={() => handleIconClick('Calendar')} />
          <Add onClick={() => handleIconClick('Add')} />
          <Dismiss onClick={() => handleIconClick('Dismiss')} />
          <Search onClick={() => handleIconClick('Search')} />
          <Pin onClick={() => handleIconClick('Pin')} />
          <Heart onClick={() => handleIconClick('Heart')} />
          <Filter onClick={() => handleIconClick('Filter')} />
          <EyeOff onClick={() => handleIconClick('EyeOff')} />
          <DismissCircle onClick={() => handleIconClick('DismissCircle')} />
          <More onClick={() => handleIconClick('More')} />
          <CheckMarkCircleFilled
            onClick={() => handleIconClick('CheckMarkCircleFilled')}
          />
          <DismissCircleFilled
            onClick={() => handleIconClick('DismissCircleFilled')}
          />
          <ErrorCircleFilled
            onClick={() => handleIconClick('ErrorCircleFilled')}
          />
        </IconsContainer>
      </GroupIconsContainer>

      <GroupIconsContainer>
        <GroupIconstTitle type="title">
          Customizations (see more detail on {`"Docs"`} tab)
        </GroupIconstTitle>
        <IconsContainer>
          <Whatsapp onClick={() => alert('Whatsapp default clicked')} />
          <Whatsapp size={32} onClick={() => alert('Whatsapp 32px clicked')} />
          <StyledWhatsapp onClick={() => alert('StyledWhatsapp clicked')} />

          <ArrowSync onClick={() => alert('ArrowSync default clicked')} />
          <ArrowSync
            size={32}
            onClick={() => alert('ArrowSync 32px clicked')}
          />
          <StyledArrowSync onClick={() => alert('StyledArrowSync clicked')} />

          <StyledCheckMarkCircleFilled />
          <StyledCheckMarkCircleFilled size={32} />
          <StyledErrorCircleFilled />
          <StyledErrorCircleFilled size={32} />
        </IconsContainer>
      </GroupIconsContainer>
    </Main>
  )
}

export default {
  title: 'Iconography/Icons',
  comopnent: ShowRoom,
} as Meta

export const Icons: Story = () => <ShowRoom />

Icons.parameters = {
  docs: {
    source: {
      code: `
// Default size is 24px
// Default color is black for flexible color icons and original color for fixed color icons

// Fixed colors

//===========================================================================================
// Simple use.
import { Whatsapp } from '@libellum-ds/react'

<Whatsapp onClick={() => alert('Whatsapp default clicked')} />

//===========================================================================================
// Change size by prop
import { Whatsapp } from '@libellum-ds/react'

<Whatsapp size={32} onClick={() => alert('Whatsapp 32px clicked')} />

//===========================================================================================
// Using an override style to change size
import { styled } from '@libellum-ds/react'
import { Whatsapp } from '@libellum-ds/react'

const StyledWhatsapp = styled(Whatsapp, {
  width: '48px',
  height: '48px',
})

<StyledWhatsapp />

// Flexible colors

//===========================================================================================
// Simple use
import { ArrowSync } from '@libellum-ds/react'

<ArrowSync onClick={() => alert('ArrowSync default clicked')} />

//===========================================================================================
// Change size by prop
import { ArrowSync } from '@libellum-ds/react'

<ArrowSync
  size={32}
  onClick={() => alert('ArrowSync 32px clicked')}
/>

//===========================================================================================
// Using an override style to change size and color
import { styled } from '@libellum-ds/react'
import { ArrowSync, ErrorCircleFilled, CheckMarkCircleFilled } from '@libellum-ds/react'

const StyledArrowSync = styled(ArrowSync, {
  width: '48px',
  height: '48px',
  color: '$color-success-50',

  '&:hover': {
    color: '$color-theme-50',
  },
})

const StyledErrorCircleFilled = styled(ErrorCircleFilled, {
  color: '$color-error-50',
})

const StyledCheckMarkCircleFilled = styled(CheckMarkCircleFilled, {
  color: '$color-success-50',
})

<StyledArrowSync onClick={() => console.log('StyledArrowSync clicked')} />

<StyledCheckMarkCircleFilled />
<StyledCheckMarkCircleFilled size={32} />
<StyledErrorCircleFilled />
<StyledErrorCircleFilled size={32} />
      `,
    },
  },
}
