import React from 'react'
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
  } from '@chakra-ui/react'
import Carrousel from './Carrousel'

const Hero = () => {
    return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', lg: 'row' }}
        m={'0 5%'}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
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
              sumate!
            </Text>
            <br />
            <Text as={'span'} color={'#1AABE3'}>
              a crear sonrisas
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Pertenecemos a "Dona Cabellos Corrientes". 
            Nuestra misión es llevar una sonrisa a aquellos que por procesos médicos han perdido su cabello.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              color={'#FFF1A1'}
              bg={'#1AABE3'}
              _hover={{
                opacity: 0.8
                }}>
              Sumate
            </Button>
            <Button
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              color={'#866D34'}
              bg={'#FFF1A1'}
              _hover={{
                opacity: 0.8
                }}>
              Conocenos
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            width={{ base: '280px', md: '500px' }}
            overflow={'hidden'}
            boxShadow={'2xl'}>
            <Carrousel />
          </Box>
        </Flex>
      </Stack>
    </Container>
    )
}

export default Hero
