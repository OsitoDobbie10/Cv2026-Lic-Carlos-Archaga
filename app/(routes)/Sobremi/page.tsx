import Avatar from '@/components/Avatar'
import Container from '@/components/Container'
import ConterServices from '@/components/ConterServices'
import LineLife from '@/components/LineLife'
import TransitionPages from '@/components/TransitionPages'
const page = () => {
  return (
    <>
     <TransitionPages/>
     <Container>
      <Avatar/>
      <h1 className='text-2xl text-center leading-tight md:text-center md:text-5xl md:mt-10'>Toda mi {''}
      <span className='font-bold text-secondary'>Trayecoria profesional</span>
      </h1>
      <ConterServices/>
      <LineLife/>
     </Container>
    </>
  )
}

export default page
