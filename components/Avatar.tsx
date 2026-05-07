import Image from "next/image"
import TransitionComponent from "./TransitionComponent"
import Dev from "@/public/programacion.png"
const Avatar = () => {

  return (
    <TransitionComponent position='bottom' className="bottom-0 right-0 hidden md:inline-block md:absolute">
      <Image src={Dev} alt="ImagenDevs" width={300} height={300} className="w-full h-full"/>
    </TransitionComponent> 
  )
}

export default Avatar;
