import React from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
    Image,
    Link
  } from '@chakra-ui/react'
  import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
  import LogoDona from '../../assets/donacabellos-01.png'
  import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      color={'#866D34'}
      boxShadow="0px -2px 10px rgba(0, 0, 0, 0.1)"
      className='footer'
      >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <NavLink to='/'>
              <Image src={LogoDona} alt={'Dona Cabellos Logo'} maxW='80px' />
        </NavLink>
        <Text textAlign='center'>Curuzú Cuatiá - Corrientes</Text>
        <Stack direction={'row'} spacing={6}>
          <Link label={'Facebook'} 
                href={'https://www.facebook.com/donacabelloscuruzu'} 
                target='_blank'
                _hover={{
                color: '#FFF1A1',
                transition: "500ms"
                }} >
            <FaFacebookSquare fontSize='1.8rem'/>
          </Link>
          <Link label={'Instagram'} 
                href={'https://www.instagram.com/donacabellos.curuzu/'}
                target='_blank'
                _hover={{
                color: '#FFF1A1',
                transition: "500ms"
                }} >
            <FaInstagramSquare fontSize='1.8rem'/>
          </Link>
        </Stack>
      </Container>
    </Box>
    )
}

export default Footer

// const SocialButton = ({ children, label, href }) => {
//     return (
//       <chakra.button
//         // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
//         rounded={'full'}
//         w={8}
//         h={8}
//         cursor={'pointer'}
//         as={'a'}
//         href={href}
//         display={'inline-flex'}
//         alignItems={'center'}
//         justifyContent={'center'}
//         transition={'background 0.3s ease'}
//         _hover={{
//           bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
//         }}>
//         <VisuallyHidden>{label}</VisuallyHidden>
//         {children}
//       </chakra.button>
//     );
//   };
