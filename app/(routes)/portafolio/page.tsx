
import AvatarPortafolio from '@/components/AvatarPortafolio'
import CircleImage from '@/components/CircleImage'
import Container from '@/components/Container'
import Porfoliobox from '@/components/Porfoliobox'
import TransitionComponent from '@/components/TransitionComponent'
import TransitionPages from '@/components/TransitionPages'
import { dataPortfolio } from '@/data'
import React from 'react'

const page = () => {
  return (
    <Container>
    <TransitionPages/>
    <AvatarPortafolio/>
    <CircleImage/>
    <TransitionComponent position='bottom' className="flex flex-col justify-center' h-full">
    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Proyectos personales realizados <span className='text-secondary font-bold'>enfocados a ciencia de datos y desarrollo web</span></h1> 
    <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4 sm:grid-cols-2 ">
    {
        dataPortfolio.map((data)=>{
            return <Porfoliobox key={data.id} data={data}/>
        })
    }
    </div>
    </TransitionComponent>
    </Container>
  )
}

export default page
