import React, { useState } from 'react';
import { Fake, PageArea } from './styled';
import useApi from '../../helpers/OnbAPI'
import { useParams } from 'react-router';

import {  PageContainer } from '../../components/MainComponents';

const AdPage = () => {

  const api = useApi()
  const { id } = useParams()
  
  
  const [loading, setLoading] = useState(true)
  

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
              </div>
              <div className="adDescription">
              { loading && <Fake height={100} />}
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