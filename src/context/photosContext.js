import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import getDonantes from '../services/getDonantes'

export const Photos = React.createContext()

const PhotosContext = ({ children }) => {
    const [photos, setPhotos] = useState([])
    const [update, setUpdate] = useState(false)
    const [showChild, setShowChild] = useState(false)

    useEffect(() => {
        getDonantes()
        .then(res => {
            setPhotos(res)
            setShowChild(true)
        })
    }, [update])

    const handleUpdatePhotos = () => {
        setUpdate(!update)
    }

    if (!showChild) {
        return <Loading/>
    } else {
        return (
            <Photos.Provider
                value={{ photos, handleUpdatePhotos }}
            >
                {children}
            </Photos.Provider>
        )
    }
}

export default PhotosContext