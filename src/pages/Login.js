import React, { useState, useContext, useEffect } from 'react'
import {
    Box,
    Flex,
    Button,
    Stack,
    useColorModeValue,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
import app from "../config/Firebase"
import { Auth } from "../context/authContext"
import {useHistory} from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { usuario } = useContext(Auth)

  let history = useHistory()

  useEffect(() => {
    if (usuario) {
        history.push("/")
    }
  }, [history, usuario])

  const handleLogin = (e) => {
    e.preventDefault()
    if (!email || !password) {
      alert('Completar todos los campos')
    } else {
      app.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
          console.log(result)
          history.push("/")
      })
      .catch(error => {
          console.log(error.message)
      })
    }
  }

    return (
      <Flex
        minH={'calc(100vh - 300px)'}
        align={'center'}
        justify={'center'}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Heading textAlign='center' mt={2} fontWeight={600} fontSize={{ base: '1.2rem', md: '2.4rem' }}>
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
                Iniciar sesión
            </Text>   
            <Text fontSize={'md'} mt={3} fontWeight={400} color={'gray.500'}>
            sólo si tienes acceso a modificar esta página web
          </Text>
        </Heading>
        <Box
          rounded={'lg'}
          borderWidth="1px"
          borderRadius="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form method="POST" onSubmit={handleLogin} >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel fontSize='sm'>Email</FormLabel>
              <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel fontSize='sm'>Contraseña</FormLabel>
              <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                type='submit'
                color={'#FFF1A1'}
                bg={'#1AABE3'}
                _hover={{
                opacity: 0.8,
                }}>
                Ingresar
              </Button>
            </Stack>
          </Stack>
        </form>
        </Box>
      </Stack>
    </Flex>
    )
}

export default Login
