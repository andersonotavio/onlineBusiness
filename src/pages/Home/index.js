import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { PageArea, SearchArea } from './styled';
import useApi from '../../helpers/OnbAPI'

import { PageContainer } from '../../components/MainComponents';

const Home = () => {

  const api = useApi()

  const [listStates, setStatesList] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    const getStates =  async () => {
      const list = await api.getStates()
      setStatesList(list)
    }
    getStates()
  }, [])

  useEffect(() => {
    const getCategories = async () => {
      const cat = await api.getCategories()
      setCategories(cat)
    }
    getCategories()
  }, [])


  return (
   <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
                {listStates.map((i,k) =>
                  <option key={k} value={i.name}>{i.name}</option>
                )}
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">
            {categories.map((i, k) =>
              <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                <img src={i.img} alt="" />
                <span>{i.name}</span>
              </Link>
            )}
          </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>
          ...
        </PageArea>
      </PageContainer>
   </>
  )
}

export default Home;