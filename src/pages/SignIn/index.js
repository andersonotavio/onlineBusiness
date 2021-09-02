import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/OnbAPI'
import { doLogin } from '../../helpers/authHandler'
import {  ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents';

const SignIn = () => {

  const api = useApi()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberPassword, setRememberPassword] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState('')

 async function handleSubmit(event){
    event.preventDefault()
    setDisabled(true)

    const json = await api.login(email, password)

    if(json.error){
      setError(json.error)
    }else{
      doLogin(json.token, rememberPassword)
      window.location.href = '/';
    }

    setDisabled(false)
  }

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>

      {error &&
        <ErrorMessage>{error}</ErrorMessage>
      }

      <PageArea>
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">E-mail</div>
            <div className="area--input">
              <input 
                type="email" 
                disabled={disabled}
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Senha</div>
            <div className="area--input">
              <input 
                type="password" 
                disabled={disabled}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Lembrar senha</div>
            <div className="area--input">
              <input 
                type="checkbox" 
                disabled={disabled}
                value={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Fazer Login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  )
}

export default SignIn;