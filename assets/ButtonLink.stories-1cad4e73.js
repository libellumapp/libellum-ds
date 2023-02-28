import{a as e,F as o,j as t}from"./jsx-runtime-69008c6b.js";import{b as r,S as i}from"./index-e28cface.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-b042d21f.js";import"./inheritsLoose-c8b266dc.js";const d={title:"Form/Buttons/ButtonLink",component:r,args:{disabled:!1,tabIndex:1},argTypes:{children:{table:{disable:!0}},onClick:{action:"click",table:{disable:!0}}}},n={args:{children:"Clique aqui"}},h={args:{children:e(o,{children:[t(i,{}),"Clique aqui"]})}},p={args:{children:e(o,{children:["Clique aqui",t(i,{})]})}},L={args:{children:[e(o,{children:[t(i,{}),"Clique aqui",t(i,{})]})]}};n.parameters={docs:{source:{code:`
// Simple use
//====================================================================================
// ButtonLink render a HTML Anchor as default
import { ButtonLink } from '@libellum-ds/react'

<ButtonLink href="/">
  <Search />
  Home
  <Search />
</ButtonLink>

//====================================================================================
// If is necessary, is possible to pass "as" prop a Link (react-router-dom) component
import { ButtonLink } from '@libellum-ds/react'
import { Link } from 'react-router-dom'

<ButtonLink as={Link} to="/">
  <Search />
  Home
  <Search />
</ButtonLink>
`}}};const k=["Basic","WithLeftIcon","WithRightIcon","WithBothSideIcons"];export{n as Basic,L as WithBothSideIcons,h as WithLeftIcon,p as WithRightIcon,k as __namedExportsOrder,d as default};
//# sourceMappingURL=ButtonLink.stories-1cad4e73.js.map
