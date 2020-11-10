import React from 'react'
import Header from '../../Components/Header/Header';
import NewPalletBox from '../../Components/NewPalletBox/NewPalletBox';
import Head from "../../Components/Helper/Head/Head";

const Create = () => {
  document.title = 'Pick Pallet | Criar paleta';
  return (
    <div>
      <Head title="Criar paleta" />
      <Header />
      <NewPalletBox />
    </div>
  );
};

export default Create;
