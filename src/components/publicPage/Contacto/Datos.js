import React from 'react'
import {
    Flex,
    Icon,
    Heading,
    Text,
    Link
  } from "@chakra-ui/react"
import { FaFacebook, FaInstagram, FaAt, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Datos = () => {
    return (
    <Flex
      flexDir="column"
      w={[250, 400, 400, 600]}
      margin="1em"
      mt={{base: '3rem', lg: '0'}}
      padding="1em"
      justifyContent="space-between"
    >
      <Text color="gray.400">Información de contacto</Text>
      <Heading size="md" color="gray.600">
        Dona Cabellos Curuzú Cuatiá
      </Heading>
      <Flex alignItems="center" marginTop="1em">
        <Icon color="#1AABE3" as={FaAt} marginRight="1em" />
        <Text fontWeight="500" color="gray.600">
          donacabellos@gmail.com
        </Text>
      </Flex>
      <Flex alignItems="center" marginTop="1em">
        <Icon
          fontSize="1em"
          color="#1AABE3"
          as={FaPhone}
          marginRight="1em"
        />
        <Text fontWeight="500" color="gray.600">
            03774 - 000000
        </Text>
      </Flex>

      <Flex alignItems="center" marginTop="1em">
        <Icon
          fontSize="1em"
          color="#1AABE3"
          as={FaMapMarkerAlt}
          marginRight="1em"
        />
        <Text fontWeight="500" color="gray.600">
            Sarmiento y Castelli - Curuzú Cuatiá - Corrientes
        </Text>
      </Flex>
      <Flex alignItems="center" marginTop="1em">
        <Icon
          fontSize="1em"
          color="#1AABE3"
          as={FaFacebook}
          marginRight="1em"
        />
        <Link href='https://www.facebook.com/donacabelloscuruzu' 
        fontWeight="500" color="gray.600" target='_blank'>
            Facebook Dona Cabellos
        </Link>
      </Flex>
      <Flex alignItems="center" marginTop="1em">
        <Icon
          fontSize="1em"
          color="#1AABE3"
          as={FaInstagram}
          marginRight="1em"
        />
        <Link href='https://www.instagram.com/donacabellos.curuzu/' 
        fontWeight="500" color="gray.600" target='_blank'>
            Instagram Dona Cabellos
        </Link>
      </Flex>
    </Flex>
    )
}

export default Datos
