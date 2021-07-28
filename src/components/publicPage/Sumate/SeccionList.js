import React from 'react'
import { Stack, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import { FaCircle } from 'react-icons/fa'

const SeccionList = ({info}) => {

    return (
        <Stack maxW={'500px'} flex={1} spacing={{ base: 5, md: 6 }} textAlign={{base:'center', sm: "left"}}>
                <Heading color={'#866D34'}>{info.name}</Heading>
                <Text fontSize={{base: '1rem', md:'1.2rem'}}>{info.description}</Text>
                <List spacing={3} fontSize={{base: '0.8rem', md:'1rem'}}>
                { info.list.map((item, index) => 
                    <ListItem key={index}>
                        <ListIcon as={FaCircle} color={'#FFF1A1'} />
                        {item}
                    </ListItem>
                )}
                </List>
            </Stack>
    )
}

export default SeccionList
