import { PageHeader } from 'antd'
import React, { ReactNode } from 'react'

import { HeaderContainer } from './Header.style'

export interface IHeaderProps {
  title: ReactNode
  footer?: ReactNode
  extra?: ReactNode
}

export function Header({ title, footer, extra }: IHeaderProps) {
  return (
    <HeaderContainer>
      <PageHeader title={title} extra={extra} footer={footer} />
    </HeaderContainer>
  )
}
