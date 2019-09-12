import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"

import * as S from '../Layout/styled'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
 
  return (
    <S.LayoutWrappper>
      <GlobalStyles/>
      <aside>
        <Profile/>
      </aside>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrappper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
