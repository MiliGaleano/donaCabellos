import React from 'react'
import { Container, Flex, Box, Image, Heading, Text } from '@chakra-ui/react'
import DonaHero from '../assets/pelucas.jpg'

const Nosotros = () => {
    return (
        <Container maxW={'96%'} m={'2rem auto'}>
            <Flex direction='column' justify={'center'} align={'center'} maxW={'7xl'} margin='auto'>
                <Box flex="none" maxW={{ base: '90%', md: '70%' }} boxSize="full" shadow="md" mt={6} rounded={'2xl'}>
                    <Image src={DonaHero} 
                        alt={'Hero Image'}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={'100%'}
                        objectFit="cover"
                        rounded={'2xl'}
                    />
                </Box>
                {/* <Heading mt={8} textAlign="center" w='90%'>Dona Cabellos Curuzú Cuatiá</Heading> */}
                <Heading
                textAlign='center'
                fontWeight={600}
                maxW='1240px' m='auto'
                fontSize={{ base: '1.2rem', md: '2.4rem' }}
                mt={8}
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
                    Dona Cabellos Curuzú Cuatiá
                    </Text>   
                </Heading>
                <Text color={'gray.500'} textAlign="center" mt={6} w={{base:'90%', sm:'60%'}}>
                Pertenecemos a "Dona Cabellos Corrientes". 
                Nuestra misión es llevar una sonrisa a aquellos que por procesos médicos han perdido su cabello.
                Somos un grupo de mujeres que se juntan todas las semanas a coser pelucas oncológicas para donar a quienes las requieran.
                Esto lo podemos llevar a cabo gracias a la donación desinteresada de un montón de corazones bondadosos.
                </Text>
            </Flex>
        </Container>
    )
}

export default Nosotros
