import React from 'react'
import Header from '../../Components/Header/Header'
import Head from "../../Components/Helper/Head/Head";
import PalletBox from '../../Components/PalletBox/PalletBox'

const Home = () => {
  return (
    <div>
      <Head title="Paletas" />
      <Header />
      <PalletBox />
    </div>
  );
};

export default Home;
