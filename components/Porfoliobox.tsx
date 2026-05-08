"use string";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface PorfolioBox{
  data: {
    id: number,
    title: string,
    image: string,
    urlGithub: string,
    urlDemo:string
  }
}
const Porfoliobox = (props:PorfolioBox) => {
  const {data} = props;
  const {title,image,urlGithub,urlDemo} = data;
  return (
    <div className='p-4 border border-white'>
    <h3 className='mb-4 text-xl'>{title}</h3>
    <div className="mb-4 text-6xl text-secondary text-center">{image}</div>
    <div className="flex gap-5 mt-5" >
    <Link href={urlDemo} target='_blank' className='p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/50'>
     Mirar
    </Link> 
    </div>
    </div>
  )
}

export default Porfoliobox
