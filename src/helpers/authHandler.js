import Cookies from 'js-cookie';

export const isLogged = () =>{
  const token = Cookies.get('token')
  return (token) ? true : false;
}

export const doLogin = (token, rememberLogin = false) =>{
  if(rememberLogin){
    Cookies.get('token', token, {expires: 999})
  }else{
    Cookies.get('token', token)
  }
}

