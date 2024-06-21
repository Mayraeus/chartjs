import React from 'react'
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import { color } from 'chart.js/helpers'

export default function Lineas() {

    const ref = useRef()

    const plantas2023 = [
        { nombre: "violeta", color: "morado" },
        { nombre: "cactus", color: "verde" },
        { nombre: "rosa", color: "rojo" },
        { nombre: "suculenta", color: "verde" },
        { nombre: "girasol", color: "rojo" },
        { nombre: "girasol", color: "verde" },
        { nombre: "alcatraz", color: "blanco" },
    ]

    const plantas2024 = [
        { nombre: "violeta", color: "morado" },
        { nombre: "cactus", color: "verde" },
        { nombre: "rosa", color: "Amarilla" },
        { nombre: "girasol", color: "rojo" },
        { nombre: "girasol", color: "verde" },
        { nombre: "alcatraz", color: "Naranja" },
    ]

    useEffect(() => {
        new Chart(
            ref.current,
            {
                type: 'line',
                data: {
                    labels: plantas2023.map(val => val.nombre)
                        .filter((val, i, self) => self.indexOf(val) == i),
                    datasets: [{
                        label: "Plantas 2023",
                        data: plantas2023.map(val => val.nombre)
                            .reduce((val, i) => {
                                const count = val[i] || 0;
                                val[i] = count + 1;
                                return val;
                            }, {})
                    }]
                }
            }
        )
    }, [])


    return (
        <canvas ref={ref}></canvas>
    )
}
