import React, { useState, useEffect } from 'react';
import { Fake, PageArea } from './styled';
import useApi from '../../helpers/OnbAPI'
import { useParams } from 'react-router';

import {  PageContainer } from '../../components/MainComponents';

const AdPage = () => {

  const api = useApi()
  const { id } = useParams()
  
  
  const [loading, setLoading] = useState(true)
  const [adInfo, setAdInfo] = useState({})

  useEffect(() => {
    async function getAdInfo(id){
      const request = await api.getAd(id, true)
      setAdInfo(request)
      setLoading(false)
    }
    getAdInfo(id)
  }, [])

  function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length === 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length === 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return `${diaF} de ${mesF} de ${anoF}`;
}

  return (
    <PageContainer>
      <PageArea>
        <div className="sideLeft">
          <div className="box">
            <div className="adImg">
            { loading && <Fake height={300} />}
            </div>
            <div className="adInfo">
              <div className="adName">
               { loading && <Fake height={20} />}
               {adInfo.title &&
                <h2>{adInfo.title}</h2>
               }
               {adInfo.dateCreated &&
                <small>Criando em: {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(adInfo.dateCreated)
                )}</small>
               }
              </div>
              <div className="adDescription">
              { loading && <Fake height={100} />}
              {adInfo.description}
              <hr/>
              {adInfo.views &&
                <small>Visualizações: {adInfo.views}</small>
              }
              </div>
            </div>
          </div>
        </div>
        <div className="sideRight">
          <div className="box box--padding"> { loading && <Fake height={20} />}</div>
          <div className="box  box--padding"> { loading && <Fake height={50} />}</div>
        </div>
      </PageArea>
    </PageContainer>
  )
}

export default AdPage;