import React from 'react'
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default function Pie({ datos }) {

    const ref = useRef()

    const dificultades = {
        facil: 1,
        intermedia: 2,
        dificil: 3,
        complicado: 4
    }

    const idiomas = [
        { nombre: "Español", dificultad: dificultades.facil },
        { nombre: "Ingles", dificultad: dificultades.intermedia },
        { nombre: "Francés", dificultad: dificultades.intermedia },
        { nombre: "Alemán", dificultad: dificultades.dificil },
        { nombre: "Mandarín", dificultad: dificultades.complicado },
        { nombre: "Ruso", dificultad: dificultades.dificil },
        { nombre: "Japonés", dificultad: dificultades.complicado },
        { nombre: "Hindi", dificultad: dificultades.complicado },
        { nombre: "Italiano", dificultad: dificultades.facil },
    ]

    let cantidades = {
        facil: 0,
        intermedia: 0,
        dificil: 0,
        complicado: 0
    }

    console.log(cantidades)
    for (let index = 0; index < idiomas.length; index++) {

        switch (idiomas[index].dificultad) {
            case dificultades.facil:
                cantidades.facil = cantidades.facil + 1
                break;
            case dificultades.intermedia:
                cantidades.intermedia = cantidades.intermedia + 1
                break;
            case dificultades.dificil:
                cantidades.dificil = cantidades.dificil + 1
                break;
            case dificultades.complicado:
                cantidades.complicado = cantidades.complicado + 1
                break;
            default:
                break;
        }
    }

    let porcentajes = {
        facil: 0,
        intermedia: 0,
        dificil: 0,
        complicado: 0
    }

    porcentajes.facil = (cantidades.facil/idiomas.length * 100).toFixed(2)
    porcentajes.intermedia =(cantidades.intermedia/idiomas.length * 100).toFixed(2)
    porcentajes.dificil = (cantidades.dificil/idiomas.length * 100).toFixed(2)
    porcentajes.complicado = (cantidades.complicado/idiomas.length * 100).toFixed(2)

    console.log(porcentajes)
    
    console.log(cantidades)
    console.log(idiomas.length)
    console.log(cantidades.complicado/idiomas.length * 100)



    useEffect(() => {
        new Chart(
            ref.current,
            {
                type: 'pie',
                plugins: [ChartDataLabels],
                data: {
                    labels: Object.keys(dificultades),
                    datasets: [{
                        label: "Idiomas",
                        data: Object.values(porcentajes),
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)',
                            'rgba(255, 205, 86, 0.2)'
                        ],
                    }]
                },
                options: {
                    aspectRatio: 1.7,
                    plugins: {
                        datalabels: {
                            color: '#000000',
                            font: {
                                size: 18
                            }
                        },
                        title: {
                            display: true,
                            //text: 'Grafica de Barras',
                            font: {
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

