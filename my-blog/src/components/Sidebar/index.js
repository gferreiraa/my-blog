import React from 'react'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'

import * as S from './styled'

const SideBar = () => (
    <S.SideBarWrapper>
        <Profile/>
        <SocialLinks/>
    </S.SideBarWrapper>
)

export default SideBar