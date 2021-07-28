import React from 'react'
import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import SeccionSumate from '../components/publicPage/Sumate/SeccionSumate'
import Pelo from '../assets/pelo.jpg'
import Materiales from '../assets/materiales.jpg'

const Sumate = () => {
    return (
        <Container maxW={'96%'} m={'2rem auto'}>
            <Flex direction='column' justify={'center'} align={'center'} maxW={'7xl'} margin='auto'>
                <Heading
                textAlign='center'
                fontWeight={600}
                maxW='1240px' m='auto'
                fontSize={{ base: '1.5rem', md: '2.4rem' }}
                >
                    <Text
                    as={'span'}
                    position={'relative'}
                    color={'#866D34'}
                    _after={{
                        content: "''",
                        width: 'full',
                        height: '30%',
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: '#FFF1A1',
                        zIndex: -1,
                    }}>
                    ¿Cómo puedo ayudar?
                    </Text>   
                </Heading>
                <SeccionSumate info={cabelloInfo} />
                <SeccionSumate info={materialesInfo} />
            </Flex>
        </Container>
    )
}

export default Sumate

const cabelloInfo = {
    name:'Cabello',
    description: 'La base de nuestro trabajo! Algunas recomendaciones para que tu donación pueda ser utilizada:',
    photo: Pelo,
    list: ['Mínimo de 20 cm de largo por mechón. De ahí, para arriba.',
    'Cabello limpio sin productos aplicados. Preferiblemente cortado en seco.',
    'Ajustarlo con una gomita para que no se enrede.',
    'Si lo juntas del piso o lo mandas suelto, no lo podemos utilizar, y nos entristece tirarlo.',
    'En lo posible, que el pelo no esté trenzado, así no tenemos que plancharlo antes de cortinarlo.',
    'Puede estar teñido, decolorado, tener canas, todo nos sirve.'
    ]
}

const materialesInfo = {
    name:'Materiales',
    description: 'Para poder seguir confeccionando pelucas necesitamos:',
    photo: Materiales,
    list: ['Tela elástica doble rebote',
    'Hilo marrón oscuro',
    'Elástico negro de 1/2cm',
    'Alfileres con cabeza',
    'Cinta de papel',
    'Tijeras',
    'Agujas curvas como para coser pelotas de fútbol',
    'Cabezas'
    ]
}