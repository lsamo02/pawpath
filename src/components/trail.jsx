import { useState, useEffect } from 'react'

export default function Trails() {
    const [trails, setTrails] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8000/api/trails/')
            const json = await response.json()
            setTrails(json)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Trails</h1>
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