import React, { useEffect } from 'react'
import { Input, Button, Typography } from 'antd'
import { LoginContainer, LoginForm } from './styles'
import { useHistory } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'

const { Text, Title } = Typography

export default function Login () {
  const { login, loginError, loginLoading, onChange, loggedIn } = useLogin()
  const history = useHistory()

  useEffect(() => {
    if (loggedIn) {
      history.push('/home')
    }
  }, [loggedIn])

  function onSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    login()
  }

  return (
    <LoginContainer>
    <LoginForm onSubmit={onSubmit}>
      <Title level={3}>Login</Title>
      <Input
        onChange={onChange}
        name="email"
        type="email"
        placeholder="Usuário"
        autoComplete="email"
        required />

      <Input
        onChange={onChange}
        name="password"
        type="password"
        placeholder="Senha"
        autoComplete="password"
        required />

      <Button loading={loginLoading} type="primary" htmlType="submit">
        Login
      </Button>

      {loginError && <Text type="danger">{loginError.message}</Text>}
    </LoginForm>
    </LoginContainer>
  )
}
