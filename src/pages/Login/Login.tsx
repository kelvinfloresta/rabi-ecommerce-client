import React from 'react'
import { Input, Button } from 'antd'
import { LoginContainer, LoginForm } from './styles'

export function Login () {
  return (
    <LoginContainer>
    <LoginForm>
      <Input type="email" placeholder="Usuário" required />
      <Input placeholder="Senha" required />

      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </LoginForm>
    </LoginContainer>
  )
}
