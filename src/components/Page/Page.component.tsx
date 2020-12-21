import React from 'react'
import { Header } from '../Header'
import { PageContainer } from './Page.style'
import { PageBody } from './PageBody.component'

interface IPageProps {
    title: string
    children?: React.ReactNode
}

export function Page ({ title, children }: IPageProps) {
  return (
    <PageContainer>
      <Header title={title}/>
      <PageBody>
        {children}
      </PageBody>
    </PageContainer>
  )
}
