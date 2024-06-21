import React from 'react'
import Contenido from '../layouts/Contenido'
import { useParams } from 'react-router-dom'
import Barras from '../components/chartjs/Barras'
import Lineas from '../components/chartjs/Lineas'
import Pie from '../components/chartjs/Pie'
import Dona from '../components/chartjs/Dona'

export default function Chartjs() {

    const { id } = useParams()

    const tipos = {
        barras: <Barras />,
        lineas: <Lineas />,
        pie: <Pie />,
        dona: <Dona />
    }

    return (
        <Contenido>
            {tipos[id] || <h1>No encontrado</h1>}
        </Contenido>
    )
}
