import styled from 'styled-components';

export const HeaderArea = styled.div`
  background-color: #FFF;
  height: 60px;
  border-bottom: 1px solid #CCC;

  a {
    text-decoration: none;
  }

  .container{
    max-width: 1000px;
    margin: auto;
    display: flex;
  }
  .logo{
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    .logo-1,
    .logo-2,
    .logo-3{
      font-size: 27px;
      font-weight: bold;
    }
    .logo-1{ color: #FF0000 }
    .logo-2{ color: #00FF00 }
    .logo-3{ color: #0000FF }
  }
  
  nav{
    padding-top: 10px;
    padding-bottom: 10px;

    ul, li{
      margin: 0;
      padding: 0;
      list-style: none;
    }
    ul{
      display: flex;
      align-items: center;
      height: 40px;
    }
    li{
      margin-left: 20px;
      margin-right: 20px;
    }
    a, button{
      border: 0;
      outline:none;
      background: none;
      cursor: pointer;
      font-size: 14px;
      color: #000;
      text-decoration: none;

      &:hover{
        color:#999;
      }
      &.button{
        background-color: #FF8100;
        color: #FFF;
        border-radius: 4px;
        padding: 5px 10px;

        &:hover{
          background-color: #E55706;
        }
      }
    }
     
  }
`