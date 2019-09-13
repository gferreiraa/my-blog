import React from "react"
import PropTypes from "prop-types"
import SideBar from '../Sidebar'

import * as S from '../Layout/styled'
import GlobalStyles from '../../styles/global'
import MenuBar from "../MenuBar"

const Layout = ({ children }) => {
 
  return (
    <S.LayoutWrappper>
      <GlobalStyles/>
        <SideBar/>
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar></MenuBar>
    </S.LayoutWrappper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
