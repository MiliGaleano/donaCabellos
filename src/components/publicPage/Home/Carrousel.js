import React, { useEffect, useState } from 'react'
import {
    Flex,
    Box,
    Image
  } from '@chakra-ui/react'
  import DonaHero from '../../../assets/equipo.jpg'
  import DonaHero3 from '../../../assets/donaequipo.jpg'
  import DonaHero2 from '../../../assets/pelucas.jpg'
  import DonaHero4 from '../../../assets/sd.png'

const Carrousel = () => {
    const slides = [
        {
          img: DonaHero
        },
        {
          img: DonaHero2
        },
        {
          img: DonaHero3
        },
        {
            img: DonaHero4
        },
      ]

      const [currentSlide, setCurrentSlide] = useState(0)
    
      const slidesCount = slides.length
    
      const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1))
      }
      const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1))
      }
      const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
      }
    
      const SLIDES_INTERVAL_TIME = 3000
      const ANIMATION_DIRECTION = "right"
    
      useEffect(() => {
        const automatedSlide = setInterval(() => {
          ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide()
        }, SLIDES_INTERVAL_TIME)
        return () => clearInterval(automatedSlide)
      }, [])

    return (
        <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
        >
        <Flex w="full" overflow="hidden">
            <Flex pos="relative" height={'300px'} width={{ base: '280px', md: '500px' }} {...carouselStyle}>
            {slides.map((slide, sid) => (
                <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                <Image src={slide.img} 
                    alt={'Hero Image'}
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    h={'100%'}
                    objectFit="cover"
                />
                </Box>
            ))}
            </Flex>
        </Flex>
        </Flex>
    )
}

export default Carrousel
