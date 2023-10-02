import React from 'react'
import Card from './Card'
import image1 from "../assets/bmw4.jpg"
import image2 from "../assets/01.png"
import image3 from "../assets/bmw4.jpg"


const Cards = [
  {
    id: 1,
    title: " BMW m3",
    image: image1,
    instructor: "JEREMY ",
  },
  {
    id: 2,
    title: "BMW m4",
    image: image2,
    instructor: "CONTLA"    
  },
  {
    id: 3,
    title: "BMW m5",
    image: image3,
    instructor: "SANDOVAL"      
  }
]

export default function cards(){
  console.log()
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
          {
            Cards.map(c => (
              <div className='col-md-4' key={Cards.id}>
                <Card
                key={c.id}
                id = {c.id}
                title = {c.title}
                  image = {c.image}
                instructor = {c.instructor}
                />
                      </div>                              
            ))
          }
        </div>
      </div>
  );
}