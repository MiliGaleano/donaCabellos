import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import getNovedades from '../services/getNovedades'

export const News = React.createContext()

const NewsContext = ({ children }) => {
    const [news, setNews] = useState(null)
    const [update, setUpdate] = useState(false)
    const [showChild, setShowChild] = useState(false)

    useEffect(() => {

        getNovedades()
        .then(res => {
            setNews(res)
            setShowChild(true)
        })
    }, [update])

    const handleUpdateNews = () => {
        setUpdate(!update)
    }
    console.log(news)

    if (!showChild) {
        return <Loading/>
    } else {
        return (
            <News.Provider
                value={{ news, handleUpdateNews }}
            >
                {children}
            </News.Provider>
        )
    }
}

export default NewsContext