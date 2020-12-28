import React from 'react'

import { Header } from '../Header'
import { IHeaderProps } from '../Header/Header'

import { PageContainer } from './Page.style'
import { PageBody } from './PageBody.component'

interface IPageProps extends IHeaderProps {
  children?: React.ReactNode
}

export function Page({ title, extra, footer, children }: IPageProps) {
  return (
    <PageContainer>
      <Header title={title} extra={extra} footer={footer} />
      <PageBody>{children}</PageBody>
    </PageContainer>
  )
}
