'use client';
import { dataAboutPage } from "@/data";

const LineLife = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20 px-4">
        <div className="-my-6">
          {dataAboutPage.map(({ id, title, subtitle, description, date }) => (
            <div key={id} className="relative py-7 pl-6 sm:pl-32 group">

              <h3 className="mb-1 text-lg sm:text-xl font-bold sm:mb-0">
                {title}
              </h3>

              <div className="flex flex-col sm:flex-row items-start mb-1 
                group-last:before:hidden 
                before:absolute before:left-2 sm:before:left-0 
                before:h-full before:px-px before:bg-slate-300 
                sm:before:ml-[6.5rem] before:self-start 
                before:-translate-x-1/2 before:translate-y-3 
                after:absolute after:left-2 sm:after:left-0 
                after:w-2 after:h-2 after:bg-indigo-600 
                after:border-4 after:box-content 
                after:border-slate-50 after:rounded-full 
                sm:after:ml-[6.5rem] after:-translate-x-1/2 
                after:translate-y-1.5">

                {/* 📅 Fecha - Badge adaptado para móvil */}
                <time className="
                  relative sm:absolute left-0 translate-y-0.5
                  inline-flex items-center justify-center
                  text-xs sm:text-sm font-semibold uppercase
                  w-auto sm:w-20 h-7 sm:h-8
                  px-2 sm:px-0
                  mb-2 sm:mb-0
                  bg-indigo-100 sm:bg-transparent
                  text-indigo-600 sm:text-inherit
                  rounded-full sm:rounded-none
                ">
                  {date}
                </time>

                {/* Subtítulo */}
                <p className="text-base sm:text-xl font-bold text-gray-400 mt-1 sm:mt-0">
                  {subtitle}
                </p>

              </div>

              {/* Descripción */}
              <p className="text-slate-400 text-justify text-sm sm:text-base max-w-md mt-1">
                {description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineLife;
