import React from 'react';
import {NextPage} from 'next';
import Logo from '../../assets/FinalLogo.png'
import Image from 'next/image';

const Maintenance: NextPage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Image src={Logo} alt="logo" className="w-1/2"/>
        <h1 className="text-6xl font-bold">
          This page is under maintenance
        </h1>
        <p className="mt-3 text-2xl">
          We are working hard to improve our website for you and will be back
        </p>
      </div>
    </div>
  );
}


export default Maintenance;
