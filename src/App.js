import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import NewsCard from './components/publicPage/NewsCard'

function App() {
  return (
    <ChakraProvider>
      <div>
        <NewsCard />
      </div>
    </ChakraProvider>
  );
}

export default App;
