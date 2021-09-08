import React, { useState } from 'react';
import { PageArea } from './styled';
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
              ...
            </div>
            <div className="adInfo">
              <div className="adName">
                ...
              </div>
              <div className="adDescription">
              ...
              </div>
            </div>
          </div>
        </div>
        <div className="sideRight">
          ...
        </div>
      </PageArea>
    </PageContainer>
  )
}

export default AdPage;