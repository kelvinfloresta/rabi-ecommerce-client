import React from 'react'
import { useLocation } from 'react-router-dom'

import { Flex } from '../components/Flex'
import { Menu } from '../components/Menu'

interface IPageProps {
  children: React.ReactElement
}

const extenarlRoutes = ['/', '/login']

export function HandleExternalRoute({ children }: IPageProps) {
  const { pathname } = useLocation()

  if (extenarlRoutes.includes(pathname)) {
    return children
  }

  return (
    <Flex>
      <Menu />
      {children}
    </Flex>
  )
}
