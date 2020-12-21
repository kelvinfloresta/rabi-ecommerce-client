import React, { useState } from 'react'

import { Menu as AntMenu } from 'antd'
import {
  PieChartOutlined,
  CoffeeOutlined
} from '@ant-design/icons'
import { MenuContainer } from './Menu.style'
import { ToggleMenu } from './ToggleMenu.component'
import { Link, useLocation } from 'react-router-dom'

export function Menu () {
  const [collapsed, setCollapsed] = useState(false)
  const { pathname } = useLocation()
  const activedRoutes = pathname.split('/')

  function toggleCollapsed () {
    setCollapsed(!collapsed)
  }

  return (
      <MenuContainer collapsed={collapsed}>
        <ToggleMenu collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <AntMenu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={activedRoutes}
          inlineCollapsed={collapsed}
        >
          <AntMenu.Item key="home" icon={<PieChartOutlined />}>
            <Link to="/home">
              Home
            </Link>
          </AntMenu.Item>
          <AntMenu.Item key="product" icon={<CoffeeOutlined />}>
            <Link to="/product">
              Produtos
            </Link>
          </AntMenu.Item>
          <AntMenu.Item key="category" icon={<CoffeeOutlined />}>
          <Link to="/category">
              Categorias
            </Link>
          </AntMenu.Item>
        </AntMenu>
      </MenuContainer>
  )
}
