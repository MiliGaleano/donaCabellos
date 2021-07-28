import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    Image
  } from '@chakra-ui/react'

const ModalPhoto = ({onClose, isOpen, src}) => {
      
    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered >
            <ModalOverlay/>
            <ModalContent>
                <Image borderRadius="md"
                        h="80vh"
                        objectFit="cover"
                        src={src}
                        alt="Donante de cabello"/>
            </ModalContent>
        </Modal>
    )
}

export default ModalPhoto
