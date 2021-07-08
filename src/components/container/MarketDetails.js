import React, { useEffect } from 'react';

const MarketDetails = () => {
  const API_KEY = 'f3e7a6c62566f5327da3a9f3fd13890e';
  const marketTag = 'EURUSD';
  const api = `https://financialmodelingprep.com/api/v3/fx/${marketTag}?apikey=${API_KEY}`;

  useEffect(() => {
    const getMarketInfo = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    // const getDayHistory = async () => {
    //   try {
    //     const response = await fetch(api);
    //     const data = await response.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    getMarketInfo();
  }, []);
  return (
    <section className="item details container text-white ">
      <div className="row">
        <div className="col-12 col-md-5">more info about the market</div>
        <div className="col-12 col-md-5">Something Unique</div>
      </div>
      <div className="row 30-minutes">
        <div className="col-12 col-md-4">candleStick</div>
        <div className="col-12 col-md-4">Histogram</div>
        <div className="col-12 col-md-4">scatter Plot</div>
      </div>
      <div className="row 1hr">
        <div className="col-12 col-md-4">candleStick</div>
        <div className="col-12 col-md-4">Histogram</div>
        <div className="col-12 col-md-4">scatter Plot</div>
      </div>
    </section>
  );
};

export default MarketDetails;
