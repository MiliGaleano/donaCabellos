import React, { useEffect, useState } from 'react'
import app from '../config/Firebase'
import Loading from '../components/Loading'

export const Auth = React.createContext()

const AuthContext = ({ children }) => {
    const [usuario, setUsuario] = useState(null)
    const [showChild, setShowChild] = useState(false)

    useEffect(() => {
        app.auth().onAuthStateChanged(function(user) {
            setUsuario(user)
            setShowChild(true)
        })
    }, [])

    if (!showChild) {
        return <Loading/>
    } else {
        return (
            <Auth.Provider
                value={{
                    usuario
                }}
            >
                {children}
            </Auth.Provider>
        )
    }
}

export default AuthContext
