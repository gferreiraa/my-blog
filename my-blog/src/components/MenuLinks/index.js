import React from 'react'

import links from './content'

import * as S from './styled'

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinkList>
      {links.map((link, i)=>(
        <S.MenuLinkItem key={i}>
          <S.MenuLinksLink to={link.url} activeClassName="active">
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinkItem>
      ))}
    </S.MenuLinkList>
  
  </S.MenuLinksWrapper>
)

export default MenuLinks