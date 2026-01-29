"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Login() {
    const router = useRouter()
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        router.push("/products")
    }
  return (
    <div><button onClick={handleClick}>Go to Products</button></div>
  )
}

export default Login