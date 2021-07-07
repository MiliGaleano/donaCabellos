import React from 'react'
import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue
  } from '@chakra-ui/react';

const NewsCard = () => {
    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                <Image
                src={'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80'}
                alt={`Picture of`}
                roundedTop="lg"
                />
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Badge rounded="full" px="2" fontSize="0.6em" colorScheme="blue">
                            Novedades
                        </Badge>
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                        fontSize="lg"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        // isTruncated
                        noOfLines={2}
                        >
                        {'Stand en el desfile por el 212° Aniversario de Curuzú Cuatiá'}
                        </Box>
                    </Flex>
                    <Flex justifyContent="space-between" alignContent="center">
                        <Box fontSize="md" color={useColorModeValue('gray.800', 'white')} noOfLines={3}>
                        En un nuevo aniversario de nuestra ciudad, Dona Cabellos presentó un stand mostrando su trabajo y vendiendo artesanías con el fín de recaudar fondos para seguir ayudando a personas que lo necesitan.
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}

export default NewsCard
