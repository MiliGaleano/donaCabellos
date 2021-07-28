import React, {useEffect, useState, useContext} from 'react'
import {
    Container,
    Text,
    Wrap,
    WrapItem,
    Heading
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import DonantesPhoto from '../components/publicPage/Donantes/DonantesPhoto' 
import { Photos } from "../context/photosContext"
import ModalPhoto from '../components/publicPage/Donantes/ModalPhoto'
import firebase from 'firebase/app'
import 'firebase/firestore'

const Donantes = () => {
    const [donantesList, setDonantesList] = useState()
    const { photos } = useContext(Photos)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [src, setSrc] = useState('')
    const handleSrc = (photo) => setSrc(photo)

    useEffect(() => {
        setDonantesList(photos)
    }, [])

    const handleLoadMore = () => {
      const recentlyAdded = []
      const db = firebase.firestore()
      return db.collection("donantes")
          .orderBy("timestamp", "desc")
          .limit(100)
          .get()
          .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
              recentlyAdded.push({
                  name: doc.data().name,
                  url: doc.data().url,
                  id: doc.id,
                  timestamp:doc.data().timestamp
              })
          })
          setDonantesList(recentlyAdded)
      })

    }

    return (
    <div>
        <ModalPhoto onClose={onClose} isOpen={isOpen} src={src} />
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
            { donantesList?.map(donante => 
                <WrapItem key={donante.name} h='inherit'>
                    <DonantesPhoto donante={donante} modalButton={onOpen} handleSrc={handleSrc} />
                </WrapItem>
            )}
            </Wrap>
            <button onClick={handleLoadMore}>mas</button>
        </Container>
    </div>
    )
}

export default Donantes
