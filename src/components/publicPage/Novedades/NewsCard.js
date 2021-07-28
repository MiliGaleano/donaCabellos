import React from 'react'
import {
    Flex,
    Box,
    Image,
    Badge,
    Button,
    useColorModeValue
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom'

const NewsCard = ({novedad}) => {
    return (
        <Flex w="full" h='-webkit-fill-available' alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                h='inherit'
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                <Image
                src={novedad.url}
                alt={novedad.name}
                roundedTop="lg"
                width="sm"
                maxH="200px"
                objectFit="cover"
                />
                <Box p="6">
                    <Box d="flex" alignItems="baseline" justifyContent='flex-end'>
                        <Badge rounded="full" px="2" fontSize="0.6em" colorScheme="yellow">
                        {novedad.date}
                        </Badge>
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                        fontSize="lg"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        noOfLines={2}
                        >
                        {novedad.name}
                        </Box>
                    </Flex>
                    <Flex justifyContent="space-between" alignContent="center">
                        <Box fontSize="md" color={useColorModeValue('gray.800', 'white')} noOfLines={3}>
                        {novedad.description}
                        </Box>
                    </Flex>
                    <Flex justifyContent="space-between" alignContent="center">
                        <Button
                            as={Link}
                            to={`/novedades/${novedad.id}`}
                            size={'sm'}
                            fontWeight={'normal'}
                            px={6}
                            m={'1rem auto 0'}
                            colorScheme={'red'}
                            color={'#FFF1A1'}
                            bg={'#1AABE3'}
                            _hover={{
                                opacity: 0.8,
                                }}>
                            Leer
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}

export default NewsCard
