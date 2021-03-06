import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xc93CA065268dD4C0d2F0B5E462023007a4e2dbDA&order_direction=asc'
      );
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
