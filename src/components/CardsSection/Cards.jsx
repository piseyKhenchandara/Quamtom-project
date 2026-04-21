'use client';

import React from 'react';
import Card from './Card';
import { useRouter } from 'next/navigation';

const Cards = ({ data, basePath = 'hoodies' }) => {
  const router = useRouter();

  return (
    <div className=" grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-4 justify-items-center content-center m-4 auto-rows-auto">
      {Object.values(data).map((eachData) => (
        <div
          key={eachData.id}
          className="cursor-pointer w-[95%] md:w-[250px] flex flex-row md:flex-col items-center justify-center h-[12rem] md:h-[15rem] border-2 border-black px-2"
          onClick={() => router.push(`/${basePath}/${eachData.id}`)}
        >
          <Card
            key={eachData.id}
            img={eachData.img}
            id={eachData.id}
            name={eachData.name}
            materials={eachData.materials}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
