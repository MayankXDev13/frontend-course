"use client"
import React, { use, useEffect, useState } from 'react'

export default function Client() {
    const [count, setCount] = useState(0)
    const [userData, setUserData] = useState()

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.github.com/users/mayankxdev13")
            const data = await res.json()
            setUserData(data)
        }
        fetchData()
    }, [])

    const origin = window.location.origin
    return (
        <div className='flex h-screen justify-center items-center flex-col gap-2'>
            <p className='text-2xl'>{count}</p>
            <div className='flex gap-2'>
                <button className='bg-blue-500 text-white px-2 py-1 rounded' onClick={() => setCount(count + 1)}>+</button>
                <button className='bg-blue-500 text-white px-2 py-1 rounded' onClick={() => setCount(count - 1)}>-</button>
            </div>

            {JSON.stringify(userData)}
            {origin}
        </div>
    )
}   
