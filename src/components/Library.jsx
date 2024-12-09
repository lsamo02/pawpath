import { useState, useEffect } from 'react'

export default function Library() {
    const [trails, setTrails] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5434/api/trails/')
            const json = await response.json()
            setTrails(json)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Library</h1>
            <ul>
                { trails.map((trail, index) => (
                    <li key={index} style={{paddingBottom: '25px'}}>
                        <div>{trail.trail_name}</div>
                        <div>{trail.crowd_size}</div>
                        <div>{trail.description}</div>
                        <div>{trail.description}</div>
                        <div>{trail.off_leash}</div>
                        <div>{trail.rating}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}