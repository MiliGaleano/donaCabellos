import React, { useState } from 'react'
import Comercios from '../components/publicPage/Comercios/Comercios'
import DonantesHome from '../components/publicPage/Donantes/DonantesHome'
import Hero from '../components/publicPage/Home/Hero'
import NovedadesHome from '../components/publicPage/Novedades/NovedadesHome'
import { useDisclosure } from '@chakra-ui/react'
import ModalPhoto from '../components/publicPage/Donantes/ModalPhoto'

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [src, setSrc] = useState('')
    const handleSrc = (photo) => setSrc(photo)
    
    return (
        <div>
            <ModalPhoto onClose={onClose} isOpen={isOpen} src={src} />
            <Hero />
            <NovedadesHome />
            <DonantesHome modalButton={onOpen} handleSrc={handleSrc} />
            <Comercios />
        </div>
    )
}

export default Home
