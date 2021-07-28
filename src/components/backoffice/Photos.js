import React, { useState, useContext } from 'react'
import {
  Flex,
  Heading,
  Box,
  Text,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react"
import { FaFileImage } from "react-icons/fa"
import app from "../../config/Firebase"
import firebase from 'firebase/app'
import { Photos as PhotosCont}  from "../../context/photosContext"

const Photos = () => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const { handleUpdatePhotos } = useContext(PhotosCont)

    const storage = app.storage()
    const db = app.firestore()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !image) {
            alert('Completar todos los campos')
        } else {
            const uploadTask = await storage.ref(`/donantes/${name}`).put(image)
            console.log(uploadTask.ref.getDownloadURL())
            const data = {
                name: name,
                url: await uploadTask.ref.getDownloadURL(),
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
            await db.collection('donantes').add(data)
            .then((docRef) => console.log(docRef.id))
            alert('Subido correctamente!')
            handleUpdatePhotos()
            setName('')
            setImage('')
        }
        
    }

    return (
        <Flex
        w="100%"
        flexDirection="column"
        minHeight={'calc(100vh - 300px)'}
        align="center"
        justify="center"
        padding={10}
        >
        <Heading margin={5} fontWeight={600} fontSize={{ base: '1.2rem', md: '2.4rem' }}>
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
                Donante de cabello
            </Text>   
        </Heading>
        <Box
            bg="white"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            w={[250, 400, 700]}
            maxWidth={700}
            boxShadow={"xl"}
        >
            <form method="POST" onSubmit={handleSubmit}>
            <Stack w={"90%"} margin={[3, 6, 8]} spacing={5}>
                <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    bg="white"
                    isRequired
                />
                </FormControl>
                
                <FormControl>
                <FormLabel>Foto</FormLabel>
                <Input
                    type="file"
                    id="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    style={{
                    height: "0",
                    width: "0",
                    overflow: "hidden",
                    padding: "0",
                    border: "none",
                    }}
                />
                <label htmlFor="file" style={{ cursor: "pointer" }}>
                    <Box as={FaFileImage} size="36px" color="#1AABE3" />
                </label>
                {image && (
                    <Text style={{ textAlign: "left" }} marginTop={3}>
                    {image.name}
                    </Text>
                )}
                </FormControl>
                <FormControl flexDirection='row' align="center" justify="center"> 
                    <Button type="submit" 
                            size="sm" 
                            color={'#FFF1A1'}
                            bg={'#1AABE3'}
                            _hover={{
                            opacity: 0.8,
                            }}
                            marginTop={5}>
                        Subir
                    </Button>
                </FormControl>
            </Stack>
            </form>
        </Box>
    </Flex>
    )
}

export default Photos