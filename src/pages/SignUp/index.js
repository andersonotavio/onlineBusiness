import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/OnbAPI'
import { doLogin } from '../../helpers/authHandler'
import {  ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents';

const SignUp = () => {

  const api = useApi()

  const [name, setName] = useState('')
  const [stateLoc, setStateLoc] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [stateList, setStateList] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState('')

  useEffect(() =>{
    const getStates = async () =>{
        const slist = await api.getStates();
        setStateList(slist)
    }
    getStates()
  }, [])

 async function handleSubmit(event){
    event.preventDefault()
    setDisabled(true)

    const json = await api.login(email, password)

   /* if(json.error){
      setError(json.error)
    }else{
      doLogin(json.token, rememberPassword)
      window.location.href = '/';
    }*/

    setDisabled(false)
  }

  return (
    <PageContainer>
      <PageTitle>Cadastro</PageTitle>

      {error &&
        <ErrorMessage>{error}</ErrorMessage>
      }

      <PageArea>
        <form onSubmit={handleSubmit}>
        <label className="area">
            <div className="area--title">Nome Completo</div>
            <div className="area--input">
              <input 
                type="text" 
                disabled={disabled}
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Estado</div>
            <div className="area--input">
              <select value={stateLoc} onChange={e => setStateLoc(e.target.value)}>
                <option></option>
                {stateList.map((i, k)=>
                  <option key={k} value={i._id}>{i.name}</option>
                )}
              </select>
            </div>
          </label>
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
            <div className="area--title">Confirmar Senha</div>
            <div className="area--input">
              <input 
                type="password" 
                disabled={disabled}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </label>
         
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Cadastrar</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  )
}

export default SignUp;