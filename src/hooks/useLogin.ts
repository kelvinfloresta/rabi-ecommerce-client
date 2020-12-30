import React, { useEffect, useState } from 'react'

import { authService } from '../services/Auth.service'

export function useLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const isLoggedIn = authService.restoreSession()
    setLoggedIn(isLoggedIn)
  }, [])

  function onSuccess() {
    setLoading(false)
    setLoggedIn(true)
  }

  function onError(error: any) {
    setLoading(false)
    setError(error)
  }

  function login() {
    setLoading(true)
    setError(null)

    authService.login({ password, email }).subscribe(onSuccess, onError)
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    if (name === 'email') {
      return setEmail(value)
    }

    if (name === 'password') {
      return setPassword(value)
    }
  }

  return {
    login,
    onChange,
    loggedIn,
    loginError: error,
    loginLoading: loading,
  }
}
