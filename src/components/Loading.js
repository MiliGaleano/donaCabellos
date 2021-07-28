import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"
import { Flex } from '@chakra-ui/react'

const Loading = () => {
    return (
      <Flex h={'calc(100vh - 180px)'} w='100%' justifyContent='center' alignItems='center'>
          <Loader
          type="Rings"
          color="#1AABE3"
          height={80}
          width={100}
          />
      </Flex>
    )
}

export default Loading
