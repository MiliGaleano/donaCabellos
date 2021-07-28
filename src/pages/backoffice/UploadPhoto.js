import React, { useContext, useEffect, useState } from 'react'
import Photos from '../../components/backoffice/Photos'
import { Auth } from "../../context/authContext"
import {useHistory} from 'react-router-dom'
import Loading from '../../components/Loading'

const UploadPhoto = () => {
    const [loading, setLoading] = useState(true)
    const { usuario } = useContext(Auth)
    let history = useHistory()

    useEffect(() => {
        if (!usuario) {
            history.push("/")
        } else {
            setLoading(false)
        }
    }, [])

    if (loading) return <Loading />
    return (
        <Photos />
    )
}

export default UploadPhoto
