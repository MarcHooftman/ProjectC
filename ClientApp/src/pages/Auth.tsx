import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Auth = () => {
    const [searchParams,] = useSearchParams();
    console.log(searchParams)

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 500)
    })

    return (
        <div>params: {searchParams}</div>
    )
}

export default Auth;