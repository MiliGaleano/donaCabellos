import React, { useEffect, useState, useContext } from 'react'
import {
    Container,
    Text,
    Wrap,
    WrapItem,
    Flex,
    Heading
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import NewsCard from '../Novedades/NewsCard'
import { News } from "../../../context/newsContext"

const NovedadesHome = () => {

    const [novedadesList, setNovedadesList] = useState()
    const { news } = useContext(News)
    console.log(news)

    useEffect(() => {
      setNovedadesList(news)
    }, [])

    return (
        <Container maxW={'96%'} m={'2rem auto'}>
        <Heading
            fontWeight={600}
            maxW='1240px' m='auto'
            fontSize={{ base: 'lg', lg: '3xl' }}>
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
              Últimas novedades
            </Text>
          </Heading>
        <Wrap
            direction="row"
            justify="center"
            h='max-content'
            spacing={10}
            paddingX="10px"
            paddingY={{ base: "6", sm: "12" }}
            >
            { novedadesList?.slice(0, 3).map(novedad => 
                <WrapItem key={novedad.id} h='inherit'>
                    <NewsCard novedad={novedad} />
                </WrapItem>
            )}
            </Wrap>
            <Flex maxW='1300px' m='auto'>
              <Text
                as={Link}
                to="/novedades"
                m="1rem 0.2rem 2rem auto"
                width="max-content"
                fontSize="1xl"
                alignSelf={"right"}
                textAlign="right"
                color="#1AABE3"
                fontWeight={700}
                transition="500ms"
                _hover={{
                  color: "#D82723",
                  marginRight: "0rem",
                  transition: "500ms",
                }}
              >
                Ver más ➞
              </Text>
            </Flex>
        </Container>
    )
}

export default NovedadesHome
