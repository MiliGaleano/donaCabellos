import React, {useEffect, useState, useContext} from 'react'
import {
    Container,
    Text,
    Wrap,
    WrapItem,
    Flex,
    Heading
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import DonantesPhoto from './DonantesPhoto'
import { Photos } from "../../../context/photosContext"

const DonantesHome = ({modalButton, handleSrc}) => {

  // const [loading, setLoading] = useState(true)
  const [donantesList, setDonantesList] = useState()
  const { photos } = useContext(Photos)
  const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResizeWindow)
        return () => {
        window.removeEventListener("resize", handleResizeWindow)
        }
    }, [])

    useEffect(() => {
      setDonantesList(photos)
      // GetDonantes()
      // .then(res => {
      //   setDonantesList(res)
      //   setLoading(false)
      // })
      // .catch((err) => {
      //   console.log(err)
      //   setLoading(false)
      // })
  }, [])

    let listaDonantes
    if (donantesList && donantesList.length !== 0){
          listaDonantes = donantesList.slice(0,6)
      if (width > 700) {
          listaDonantes = donantesList.slice(0,30)
      } 
    }
    // console.log(donantesList)

    // if (loading) return <Loading />
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
              Últimos donantes de cabello
            </Text>
          </Heading>
        <Wrap
            maxW='1300px'
            m='auto'
            direction="row"
            justify="center"
            h='max-content'
            spacing={10}
            paddingX="10px"
            paddingY={{ base: "6", sm: "12" }}
            >
            { listaDonantes?.map(donante => 
                <WrapItem key={donante.name} h='inherit'>
                    <DonantesPhoto donante={donante} modalButton={modalButton} handleSrc={handleSrc} />
                </WrapItem>
            )}
            </Wrap>
            <Flex maxW='1300px' m='auto'>
              <Text
                as={Link}
                to="/donantes"
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

export default DonantesHome
