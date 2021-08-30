import React from 'react'
//import { connect } from 'react-redux'
import "./App.css"
import { BrowserRouter } from 'react-router-dom'
import { Template } from './components/MainComponents'
import Footer from './components/partials/Footer'
import Header from './components/partials/Header'
import Routes from './Routes'


function App(props) {

  return (
      <BrowserRouter>
        <Template>
          <Header />
          <Routes />
          <Footer />
        </Template>
      </BrowserRouter>
  );
}

/*const mapStateToProps = (props) =>{
  return {
    user:state.user
  }
}

const mapDispacthToProps = (dispatch) => {
  return
}*/

export default App;
