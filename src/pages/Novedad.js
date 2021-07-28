import React, { useContext } from 'react'
import { Container, Heading, Box, Image, Text } from "@chakra-ui/react"
import { useParams, Link } from "react-router-dom"
import { News } from "../context/newsContext"

const Novedad = () => {

    const { id } = useParams()
    const { news } = useContext(News)

    console.log(id)
    const novedad = news.find((nov) => nov.id === id)
    console.log(novedad)
    return (
        <Container maxW="container.xl">
        <Box mb={20}>
          <Link
            to={`/novedades`}
            style={{ margin: "0", textDecoration: "none" }}
          >
            <Text
              m="2rem auto"
              maxW="900px"
              fontSize="1xl"
              textAlign="left"
              color="#1AABE3"
              fontWeight={700}
            >
              🠔 Novedades
            </Text>
          </Link>
          <Image
            w="100%"
            maxW="900px"
            h="500px"
            m="auto"
            objectFit="cover"
            src={novedad.url}
            // fallbackSrc={photo}
            alt={novedad.name}
          />
          <Box maxW="900px" m="2rem auto">
            <Text
              fontSize="1xl"
              textAlign="left"
              color="#1AABE3"
              fontWeight={700}
            >
              {/* {formatDate(newsData.created_at)} */}
              {novedad.date}
            </Text>
            <Heading maxW="900px" size="2xl" textAlign="left" m="auto" mt={4}>
              {novedad.name}
            </Heading>
            <Box maxW="900px" m="auto" mt={6}>
              {/* <Text textAlign="left">{parse(newsData.content)}</Text> */}
              <Text textAlign="left">{novedad.description}</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    )
}

export default Novedad
