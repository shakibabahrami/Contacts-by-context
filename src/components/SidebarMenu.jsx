import React from 'react'
import Styles from "./SidebarMenu.module.css"
import SidebarButtons from './SidebarButtons'

function SidebarMenu() {
  return (
    <div className={Styles.container}>
      <div className={Styles.iconContainer}>
        <span className={Styles.notebook}>📓</span>
      </div>
      <SidebarButtons  />
    </div>
  )
}

export default SidebarMenu