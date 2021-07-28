import React from 'react'
import { Flex } from "@chakra-ui/react"
import Formulario from '../components/publicPage/Contacto/Formulario'
import Datos from '../components/publicPage/Contacto/Datos'

const Contacto = () => {
    return (
    <Flex
    w="100%"
    flexDirection="column"
    align="center"
    justify="center">
        <Flex
        w="100%"
        maxW='1200px'
        flexDirection={{ base: 'column', lg: 'row' }}
        minHeight={'calc(100vh - 60px)'}
        alignItems='center'
        justifyContent="center"
        padding='60px 40px'
        >
            <Formulario />
            <Datos />
        </Flex>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1E5Pvs1hM6UISvTP4A7a26eLb-dBB_Pan"
                title='Mapa Dona Cabellos'
                style={{width: '100%', height: '500px'}}
                >
        </iframe>
    </Flex>
    )
}

export default Contacto
