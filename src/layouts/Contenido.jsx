import React from 'react'
import { Link } from 'react-router-dom'

export default function Contenido({ children }) {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-3 px-0">
                    <h3 className='text-center m-3'>Chart JS</h3>
                    <div className="list-group rounded-0">
                        <Link to='/chartjs/barras' className='border-0 list-group-item list-group-item-action'>Barras</Link>

                        <Link to='/chartjs/lineas' className='border-0 list-group-item list-group-item-action'>Lineas</Link>

                        <Link to='/chartjs/pie' className='border-0 list-group-item list-group-item-action'>Pie</Link>
                        
                        <Link to='/chartjs/dona' className='border-0 list-group-item list-group-item-action'>Dona</Link>
                    </div>
                </div>
                <div className="col-9">
                    {children}
                </div>
            </div>
        </div>
    )
}
