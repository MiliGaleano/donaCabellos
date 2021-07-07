import React from 'react'
import {
    Box,
    Flex,
    IconButton,
    Button,
    Stack,
    Collapse,
    Link,
    Image,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon
  } from '@chakra-ui/icons';
  import LogoDona from '../../assets/donacabellos-01.png'
  import { NavLink } from 'react-router-dom'

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
        <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={'#FFF1A1'}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}
            boxShadow={'lg'}
            >
            <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
                onClick={onToggle}
                icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
            />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <NavLink to='/'>
              <Image src={LogoDona} alt={'Dona Cabellos Logo'} maxW='80px' />
            </NavLink>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10} alignSelf='center'>
                <DesktopNav />
            </Flex>
            </Flex>

            <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                href={'#'}
                color={'#866D34'}>
                Sign In
            </Button>
            <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'#866D34'}
                bg={'#FFF1A1'}
                href={'#'}
                _hover={{
                bg: '#866D34',
                color: '#FFF1A1'
                }}>
                Ingresar
            </Button>
            </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
            <MobileNav />
        </Collapse>
    </Box>
    )
}
export default Header

const linkColor = '#866D34'
const linkHoverColor = '#FFF1A1'

const DesktopNav = () => {
    return (
      <Stack direction={'row'} spacing={4}>
      {NavItems.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link as={NavLink}
                  p={2}
                  to={navItem.link}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  outline= 'none'
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                  activeStyle={{
                    color: linkHoverColor
                  }}
                  >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
    )
  }
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NavItems.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    )
  }
  
  const MobileNavItem = (NavItem) => {
    return (
      <Stack spacing={4}>
        <Flex
          py={2}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Link
            as={NavLink}
            to={NavItem.link}
            fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  outline= 'none'
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                  activeStyle={{
                    color: linkHoverColor
                  }}>
            {NavItem.label}
          </Link>
        </Flex>
      </Stack>
    )
  }
  
  const NavItems= [
    {label:'Novedades',
     link:'/novedades'
    },
    {label:'Nosotros',
     link:'/nosotros'
    },
    {label:'Sumate',
     link:'/sumate'
    },
    {label:'Contacto',
     link:'/contacto'
    },
  ]