import React, { useContext } from 'react'
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
  } from '@chakra-ui/react'
  import {
    HamburgerIcon,
    CloseIcon
  } from '@chakra-ui/icons';
  import LogoDona from '../../assets/donacabellos-01.png'
  import { NavLink } from 'react-router-dom'
  import app from "../../config/Firebase"
  import { Auth } from "../../context/authContext"

const Header = () => {
    const { isOpen, onToggle } = useDisclosure()
    const { usuario } = useContext(Auth)
    
    return (
        <Box>
        <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={'#866D34'}
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
            { !usuario ?
              <Button
                as={NavLink}
                fontSize={'sm'}
                fontWeight={600}
                color={'#D82723'}
                variant={'link'}
                to={'/login'}
                >
              Ingresar
              </Button>
              : <Button 
              onClick={() => app.auth().signOut()} 
              fontSize={'sm'}
              fontWeight={600}
              color={'#D82723'}
              variant={'link'} 
              >
              Salir
              </Button>
            }
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
  const { usuario } = useContext(Auth)

    return (
      <Stack direction={'row'} spacing={4}>
      {NavItems.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link as={NavLink}
                  p={'2px'}
                  m={2}
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
                    color: '#D82723',
                    borderBottom: `2px solid ${linkHoverColor}`
                  }}
                  >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
        { usuario &&
        NavItemsBack.map((navItemBack) => (
          <Box key={navItemBack.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link as={NavLink}
                  p={'2px'}
                  m={2}
                  to={navItemBack.link}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  outline= 'none'
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                  activeStyle={{
                    color: '#D82723',
                    borderBottom: `2px solid ${linkHoverColor}`
                  }}
                  >
                  {navItemBack.label}
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
    )
  }
  
  const MobileNav = () => {
    const { usuario } = useContext(Auth)

    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NavItems.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
        { usuario &&
        NavItemsBack.map((navItemBack) => (
          <MobileNavItem key={navItemBack.label} {...navItemBack} />
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
                    color: '#D82723',
                    borderBottom: '2px solid #D82723'
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

  const NavItemsBack= [
    {label:'+ Donante',
     link:'/backoffice/donantes'
    },
    {label:'+ Novedad',
     link:'/backoffice/novedades'
    }
  ]