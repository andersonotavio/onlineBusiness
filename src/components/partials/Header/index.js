import React from 'react'
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
import { doLogout, isLogged } from '../../../helpers/authHandler'

const Header = () =>{

  let logged = isLogged();

  const handleLogout = () =>{
    doLogout()
    window.location.href = '/'
  }

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">O</span>
            <span className="logo-2">N</span>
            <span className="logo-3">B</span>
          </Link>
        </div>
        <nav>
          <ul>
            {logged &&
              <>
                <li>
                  <Link to="/my-account">Minha conta</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>sair</button>
                </li>
                <li>
                  <Link to="/post-and-add" className="button">Postar um anúncio</Link>
                </li>
              </>
              
            }

            {!logged &&
            <>
              <li>
                <Link to="/signin">Login</Link>
              </li>
              <li>
                <Link to="/signup">Cadastrar</Link>
              </li>
              <li>
                  <Link to="/signin" className="button">Postar um anúncio</Link>
                </li>
            </>
            }
          </ul>
        </nav>
      </div>
    </HeaderArea>
  )
}

export default Header;