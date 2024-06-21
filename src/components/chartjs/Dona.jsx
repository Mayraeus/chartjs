import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function Dona({ datos }) {
    const ref = useRef();

    const preferencia = {
        tinto: 3,
        blanco: 1,
        rosa: 2
    };

    const vinos = [
        { nombre: "Cabernet Sauvignon", tipo: preferencia.tinto },
        { nombre: "Merlot", tipo: preferencia.tinto },
        { nombre: "Chardonnay", tipo: preferencia.rosa },
        { nombre: "Pinot Noir", tipo: preferencia.rosa },
        { nombre: "Sauvignon Blanc", tipo: preferencia.tinto },
        { nombre: "Syrah", tipo: preferencia.blanco },
    ];

    let cantidades = {
        alto: 0,
        intermedio: 0,
        bajo: 0
    };

    for (let index = 0; index < vinos.length; index++) {
        switch (vinos[index].tipo) {
            case preferencia.tinto:
                cantidades.alto++;
                break;
            case preferencia.blanco:
                cantidades.intermedio++;
                break;
            case preferencia.rosa:
                cantidades.bajo++;
                break;
            default:
                break;
        }
    }

    let porcentajes = {
        alto: 0,
        intermedio: 0,
        bajo: 0
    };

    porcentajes.alto = ((cantidades.alto / vinos.length) * 100).toFixed(2);
    porcentajes.intermedio = ((cantidades.intermedio / vinos.length) * 100).toFixed(2);
    porcentajes.bajo = ((cantidades.bajo / vinos.length) * 100).toFixed(2);

    useEffect(() => {
        new Chart(
            ref.current,
            {
                type: 'doughnut',
                plugins: [ChartDataLabels],
                data: {
                    labels: Object.keys(preferencia),
                    datasets: [{
                        label: "Porcentaje consumo",
                        data: Object.values(porcentajes),
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
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
                            text: 'Niveles de Preferencia',
                            font: {
                                size: 20,
                            }
                        }
                    }
                }
            }
        )
    }, []);

    return (
        <>
            <canvas ref={ref} className='mt-4'></canvas>
        </>
    )
}
