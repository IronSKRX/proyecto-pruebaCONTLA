import React from 'react'
import  ReactPropTypes from 'prop-types'

export default function Card({id, title, image, instructor}) {
  return (

    <div className='card text-center bg-dark'>

      <div className='card-body text-light'>
        <img src= {image} alt='' className='card-img-top'></img>
        <h4 className='card-tittle'> {title}</h4>
        <p className='card-text text-secundary'>
            : {instructor}
        </p>
        <a href='#!' className='btn btn-outline-secondary rounded-3>'>
          Ir al Sitio Web
        </a>
      </div>
    </div>
  )

}
