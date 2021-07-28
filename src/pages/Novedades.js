import React, { useEffect, useState, useContext } from 'react'
import {
    Container,
    Wrap,
    WrapItem,
  } from '@chakra-ui/react'
import NewsCard from '../components/publicPage/Novedades/NewsCard'
import { News } from "../context/newsContext"

const Novedades = () => {

    const [novedadesList, setNovedadesList] = useState()
    const { news } = useContext(News)

    useEffect(() => {
        setNovedadesList(news)
        // setNovedadesList([
        //     {
        //         titulo:'Día Mundial de la lucha contra el cáncer infantil',
        //         contenido: 'Cada 15 de febrero se celebra el Día Internacional del Cáncer Infantil. Esta día tiene como objetivo sensibilizar y concienciar sobre la importancia de los desafíos',    
        //         id:1,
        //         url:'https://images.unsplash.com/photo-1613119351785-94336bd2db0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        //     },
        //     {
        //         titulo:'Stand en el desfile por el 212° Aniversario de Curuzú Cuatiá',
        //         contenido: 'En un nuevo aniversario de nuestra ciudad, Dona Cabellos presentó un stand mostrando su trabajo y vendiendo artesanías con el fín de recaudar fondos para seguir ayudando a personas que lo necesitan.',    
        //         id:2,
        //         url:'https://images.unsplash.com/photo-1624834465556-ed89a99eb162?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        //     },
        //     {
        //         titulo:'¡Volvimos!',
        //         contenido: 'Después de estar más de un año trabajando de forma remota por la pandemia de Covid 19, el taller de Dona Cabellos vuelve a abrir sus puertas. Nos encontramos en Berón de Astrada 625 para seguir creando pelucas y sonrisas!',    
        //         id:3,
        //         url:'https://images.unsplash.com/photo-1615396638102-b76180d62bbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        //     },
        //     {
        //         titulo:'Día Mundial de la lucha contra el cáncer infantil',
        //         contenido: 'En un nuevo aniversario de nuestra ciudad, Dona Cabellos presentó un stand mostrando su trabajo y vendiendo artesanías con el fín de recaudar fondos para seguir ayudando a personas que lo necesitan.',    
        //         id:4,
        //         url:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        //     },
        // ])
    }, [])

    return (
        <Container maxW={'96%'} m={'2rem auto'}>
            <Wrap
                direction="row"
                justify="center"
                h='max-content'
                spacing={10}
                paddingX="10px"
                paddingY={{ base: "6", sm: "12" }}
                >
            { novedadesList?.map(novedad => 
                <WrapItem key={novedad.id} h='inherit'>
                    <NewsCard novedad={novedad} />
                </WrapItem>
            )}
            </Wrap>
        </Container>
    )
}

export default Novedades
