import React, { useState, useEffect } from 'react'
import {
    Container,
    Text,
    Wrap,
    Heading
  } from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


const Comercios = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1200)
    const [isTablet, setTablet] = useState(window.innerWidth < 790)

    const updateMedia = () => {
      setDesktop(window.innerWidth > 1200)
      setTablet(window.innerWidth < 790)
  }
  
  useEffect(() => {
      window.addEventListener("resize", updateMedia)
      return () => window.removeEventListener("resize", updateMedia)
  })

    SwiperCore.use([Navigation, Pagination])

    return(
        <Container maxW={'96%'} m={'2rem auto'}>
        <Heading
            fontWeight={600}
            maxW='1240px' m='auto'
            fontSize={{ base: 'lg', lg: '3xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              color={'#866D34'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#FFF1A1',
                zIndex: -1,
              }}>
              Comercios amigos
            </Text>
          </Heading>
        <Wrap
            maxW='1300px'
            m='auto'
            direction="row"
            justify="center"
            h='max-content'
            spacing={10}
            paddingX="10px"
            paddingY={{ base: "6", sm: "12" }}
            >
            <Swiper spaceBetween={isDesktop ? 10 : !isTablet ? 20 : 30}
                    slidesPerView={isDesktop ? 4 : !isTablet ? 3 : 2}
                    pagination={{ clickable: true }}
                    loop={true}>
                {negocios.map((negocio, index) =>
                    <SwiperSlide key={index}>
                        <img src={negocio} alt='logo negocio' />
                    </SwiperSlide>
                )}
            </Swiper>
        </Wrap>
        </Container>
    )
}

export default Comercios

const negocios = [
    'https://w7.pngwing.com/pngs/566/165/png-transparent-chanel-no-5-logo-fashion-sticker-chanel-text-trademark-fashion.png',
    'https://logodownload.org/wp-content/uploads/2014/07/adidas-logo-1.png',
    'https://w7.pngwing.com/pngs/566/165/png-transparent-chanel-no-5-logo-fashion-sticker-chanel-text-trademark-fashion.png',
    'https://w1.pngwing.com/pngs/248/105/png-transparent-chocolate-logo-milka-logos-purple-text-violet-thumbnail.png',
    'https://img2.freepng.es/20180811/zfw/kisspng-pringles-vector-graphics-logo-clip-art-encapsulate-pringles-laboratorium-pani-domu-laboratorium-pan-5b6e866253fe75.4815716515339700183441.jpg',
    'https://logomaster.ai/static/media/gallery012.98daa460.png',
    'https://static.rfstat.com/renderforest/images/v2/logo-homepage/embleme_1.png'
]