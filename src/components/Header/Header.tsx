import React from 'react'
import { PageHeader } from 'antd'
import { HeaderContainer } from './Header.style'

interface IHeaderProps {
  title: React.ReactNode
}

export function Header (props: IHeaderProps) {
  return <HeaderContainer>
    <PageHeader title={props.title} />
  </HeaderContainer>
}
