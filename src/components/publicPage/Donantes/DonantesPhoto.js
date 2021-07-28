import React from 'react'
import { Image } from '@chakra-ui/react'

const DonantesPhoto = ({ donante, modalButton, handleSrc }) => {

    const handleClick = () => {
        handleSrc(donante.url)
        modalButton()
    }

    return (
        <Image
            borderRadius="md"
            h="120px"
            w="82px"
            objectFit="cover"
            src={donante.url}
            alt="Donante de cabello"
            boxShadow={'lg'}
            onClick={handleClick}
            style={{cursor:'pointer'}}
        />
    )
}

export default DonantesPhoto
