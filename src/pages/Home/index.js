import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { PageArea, SearchArea } from './styled';
import useApi from '../../helpers/OnbAPI'

import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';

const Home = () => {

  const api = useApi()

  const [listStates, setStatesList] = useState([])
  const [categories, setCategories] = useState([])
  const [listAds, setListAds] = useState([])

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

  useEffect(() => {
    const getRecentsAds = async () =>{
      const json = await api.getAds({
        sort: 'desc',
        limit: 8
      })
      setListAds(json.ads)
    }
    getRecentsAds()
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
          <h2>Anúncios Recentes</h2>
          <div className="list">
            {listAds.map((i, k) =>
              <AdItem key={k} data={i} />
            )}
          </div>
          <Link to="/ads" className="seeAllLink">Ver todos</Link>
          <hr/>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
        </PageArea>
      </PageContainer>
   </>
  )
}

export default Home;