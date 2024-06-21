import React from 'react'
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

export default function Barras() {

    const ref = useRef()

    useEffect(() => {
        new Chart(
            ref.current,
            {
                type: 'bar',
                data: {
                    labels: ["lombrices", "mariposas", "hormigas"],
                    datasets: [{
                        label: "Insectos",
                        data: [10, 3, 9],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                    }]
                },
                options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Grafica de Barras',
                        font:{
                            size: 20,
                        }
                    }
                }
            }
        }
    )
}, [])


return (
    <>
        <canvas ref={ref} className='mt-4'></canvas>
    </>
)
}

