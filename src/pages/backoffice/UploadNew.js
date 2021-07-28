import React, { useContext, useEffect, useState } from 'react'
import News from '../../components/backoffice/News'
import { Auth } from "../../context/authContext"
import {useHistory} from 'react-router-dom'
import Loading from '../../components/Loading'

const UploadNew = () => {
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
        <News />
    )
}

export default UploadNew
