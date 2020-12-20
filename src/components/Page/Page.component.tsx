import React from 'react'
import { Header } from '../Header'
import { PageContainer } from './Page.style'

interface IPageProps {
    title: string
    children?: React.ReactNode
}

export function Page ({ title, children }: IPageProps) {
  return (
    <PageContainer>
      <Header title={title}/>
      {children}
    </PageContainer>
  )
}
