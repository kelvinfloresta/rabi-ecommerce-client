import React from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'

const PageLoaderContainer = styled.div`
    min-height: 100%;
    width: 100%;
    background-color: rgba(0,0,0, 0.08);
    display: flex;
    padding-top: 10%;
    justify-content: center;
    animation: fadeIn .3s;
`

export function PageLoader () {
  return <PageLoaderContainer>
    <Spin size="large" />
  </PageLoaderContainer>
}
