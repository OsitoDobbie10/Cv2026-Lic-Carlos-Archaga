"use client";
import AvatarServices from '@/components/AvatarServices';
import CircleImage from '@/components/CircleImage';
import SliderServices from '@/components/SliderServices';
import TransitionPages from '@/components/TransitionPages';
import Container from '@/components/Container';
const page = () => {
    const sendMessage = ()=>{
        const Telefono = "95348921"
        const url = `https://api.whatsapp.com/send?phone=504${Telefono}&text=
          *Asunto Consulta por mis servicios profesionales*%0A
          *Consulto Informacion*%0A`;
          window.open(url); 
      };
  return (
    <Container>
    <TransitionPages/>
    <CircleImage/>
    <AvatarServices/>
    <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
    <div className="max-w-[450px]">
    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 md:px-20">
        Mis {''}
        <span className='font-bold text-secondary'>
         Servicios.
        </span>
    </h1>
    <p className="mb-3 text-xl text-gray-300 text-justify">
        Ofrezco servicios de analisis, edicion y creacion de datos espaciales con ArcgisPro y QGIS, administracion de base de datos relacionales  
        con postgresSQL, MySQL, Oracle y MySQL. Analisis de datos ETL y creacion de visualizadores con PowerBi, programacion con python enfocada a analisis de datos,
        scripting, webscraping, creacion de interfaces graficas, analisis estadistico y gismapping, programacion con javascript orientada a desarrollo web con next.js,
        manejo de servidores windows, Linux, Docker AWS y Git para gestion de procesos, manejo y uso de Autocad y levantamiento Topografico.
    </p>
    <button
    onClick={sendMessage}
     className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
    </div>
    <div>
    <SliderServices/>
    </div>
    </div>
    </Container>
  )
}
export default page;
