import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import {
    Flex,
    Box,
    Heading,
    Text,
    Stack,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea
  } from "@chakra-ui/react"

const Formulario = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !message) {
            alert('Completar todos los campos')
        } else {
        sendFeedback()
        }
    }

    function sendFeedback() {
        let templateParams = {
            from_name: name,
            message: message,
            reply_to: email
        }
        console.log(templateParams)
        emailjs.send('service_sbkke6k', 'template_jfrgatn', templateParams, 'user_2mdpl2NOLKG1MB1V8sqvB')
        .then(res => {
            console.log('Email successfully sent!')
        })
        .catch(err => console.log('Algo salió mal ', err))
      }

    return (
        <Flex
        w="100%"
        flexDirection="column"
        align="center"
        justify="center"
        >
        <Heading
                textAlign='center'
                fontWeight={600}
                maxW='1240px' m='auto'
                mb={6}
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
                    Envíanos un mensaje
                    </Text>   
                </Heading>
        <Box
            bg="white"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            w={[250, 400]}
            maxWidth={400}
            boxShadow={"xl"}
        >
        <form method="POST" onSubmit={handleSubmit}>
        <Stack w={"90%"} margin={[3, 6]} spacing={5}>
            <FormControl>
            <FormLabel fontSize='sm'>Nombre</FormLabel>
            <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                bg="white"
                size="sm"
                isRequired
            />
            </FormControl>
            <FormControl>
            <FormLabel fontSize='sm'>Email</FormLabel>
            <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="white"
                size="sm"
                isRequired
            />
            </FormControl>
            <FormControl>
            <FormLabel fontSize='sm'>Mensaje</FormLabel>
            <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Deja aquí tu mensaje"
                size="sm"
            />
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
                Enviar
                </Button>
            </FormControl>
        </Stack>
        </form>
    </Box>
    </Flex>
    )
}

export default Formulario
