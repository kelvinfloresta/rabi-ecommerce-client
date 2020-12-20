import React from 'react'

import { Button } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import styled from 'styled-components'

interface IToggleMenuProps {
  collapsed: boolean
  toggleCollapsed: () => void
}

const StyledToggleMenu = styled(Button)`
  width: 100%;
  background-color: transparent;
  color: white;
  border-color: transparent;

  &:hover, &:active, &:focus {
    background-color: transparent;
    color: white;
    border-color: transparent;
  }
`

export function ToggleMenu ({ collapsed, toggleCollapsed }: IToggleMenuProps) {
  return (
      <StyledToggleMenu size="large" onClick={toggleCollapsed}>
        {!collapsed && <MenuUnfoldOutlined />}
        {collapsed && <MenuFoldOutlined />}
      </StyledToggleMenu>
  )
}
