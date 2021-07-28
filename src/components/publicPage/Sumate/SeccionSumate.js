import React from 'react'
import { Stack, Image } from '@chakra-ui/react'
import SeccionList from './SeccionList'

const SeccionSumate = ({info}) => {
    return (
        <Stack
            align={'center'}
            spacing={{ base: 8, md: 16 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
            m={'0 5%'}
            justifyContent={'center'}>
            <Image src={info.photo} 
                alt={info.name}
                fit={'cover'}
                align={'center'}
                maxW={'30%'}
                minW='240px'
                h={'100%'}
                objectFit="cover"
                rounded={'2xl'}
                />
            <SeccionList info={info}/>
        </Stack>
    )
}

export default SeccionSumate
