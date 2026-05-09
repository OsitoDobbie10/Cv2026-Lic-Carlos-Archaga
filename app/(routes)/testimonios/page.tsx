"use client";
import CircleImage from '@/components/CircleImage'
import TransitionPages from '@/components/TransitionPages'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { dataTestimonials } from '@/data';
import Image from 'next/image';
const page = () => {
  return (
    <>
    <TransitionPages/>
    <div className="flex flex-col justify-center h-lvh">
    <CircleImage/>
    <h1 className="text-center text-2xl leading-tight md:text-4xl md:mb-5">
     Mi skills {''}
     <span className='font-bold text-secondary'>
     de servicios profesionales  
     </span>
    </h1>
    <div className="flex items-center justify-center h-[500px]">
    <div>
    <Swiper 
    breakpoints={{320: {
                        slidesPerView: 1,
                        spaceBetween: 15},}}
                        freeMode={true}
                        pagination={{
                        clickable: true}}
                        modules={[Pagination]}
                            className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]">
                            {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                                <SwiperSlide key={id}>
                                    <Image src={imageUrl} alt={name} width="300" height="300" className="mx-auto" />
                                    <h4 className='text-center'>{name}</h4>
                                    <div className="mt-3 text-center text-[12px]">
                                        {description}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
    </div>
    </div>
    </div>
    </>
  )
}

export default page
