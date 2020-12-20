import React from 'react'
import { Flex } from '../components/Flex'
import { Menu } from '../components/Menu'
import { useLocation } from 'react-router-dom'

interface IPageProps {
  children: React.ReactElement
}

const extenarlRoutes = ['/', '/login']

export function HandleExternalRoute ({ children }: IPageProps) {
  const { pathname } = useLocation()

  if (extenarlRoutes.includes(pathname)) {
    return children
  }

  return <Flex>
      <Menu />
      {children}
    </Flex>
}
