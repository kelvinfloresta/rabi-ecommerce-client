import { PieChartOutlined, CoffeeOutlined } from '@ant-design/icons'
import { Menu as AntMenu } from 'antd'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { MenuContainer } from './Menu.style'
import { ToggleMenu } from './ToggleMenu.component'

export function Menu() {
  const [collapsed, setCollapsed] = useState(false)
  const { pathname } = useLocation()
  const activedRoutes = pathname.split('/')

  function toggleCollapsed() {
    setCollapsed(!collapsed)
  }

  return (
    <MenuContainer style={{ fontSize: '2rem' }} collapsed={collapsed}>
      <ToggleMenu collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <AntMenu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={activedRoutes}
        inlineCollapsed={collapsed}>
        <AntMenu.Item key="home" icon={<PieChartOutlined />}>
          <Link to="/home">Home</Link>
        </AntMenu.Item>
        <AntMenu.Item key="product" icon={<CoffeeOutlined />}>
          <Link to="/product">Produtos</Link>
        </AntMenu.Item>
      </AntMenu>
    </MenuContainer>
  )
}
