import { Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
const { Title, Text } = Typography

const Container = styled.div`
  span.ant-typography {
    color: white;
  }
`

export const ActiveProductTooltip = (
  <Container>
    <Title type="warning" level={5}>
      O que é?
    </Title>
    <Text>Inativar um produto interrompe os pedidos temporáriamente</Text>
    <Title type="warning" level={5}>
      Quando utilizar?
    </Title>
    <Text>Inative um produto quando não há estoque</Text>
    <Title type="warning" level={5}>
      Porque criar um produto já inativo?
    </Title>
    <Text>
      Bastante útil quando é necessário cadastrar o produto, mas ainda não tenho
      em estoque
    </Text>
  </Container>
)
