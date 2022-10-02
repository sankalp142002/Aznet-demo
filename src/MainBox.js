import React, {useEffect, useState} from 'react'
import "./styles.css"
import Data from './Data'
export default function SideBar() {
  const countries = [
    {
      id:1,
      country:"USA",
      count:3
    },
    {
      id:2,
      country:"UK",
      count:7
    },
    {
      id:1,
      country:"Canada",
      count:3
    },
    {
      id:3,
      country:"Australia",
      count:2
    },
    {
      id:4,
      country:"New Zealand",
      count:1
    },
    {
      id:5,
      country:"Singapore",
      count:1
    },
    {
      id:6,
      country:"Ireland",
      count:1
    },
    {
      id:7,
      country:"Germany",
      count:1
    },
  ]
 
  const [item,setItem] = useState(Data)

  

  const filter = (eventVariable) =>{

    const newData = Data.filter((element) =>{
      return element.Country===eventVariable;
    });setItem(newData)
    
  }

  const country = countries.map(element => {
    return <div className='country' id={element.country} onClick={() => {filter(element.country) }}>{element.country} ({element.count})</div> 
  })
  const card = item.map(element => {
    return     <div className='card'>
    <img className='image' src={require("./image 1.png")} alt="img"></img> 
    <div className='event'>Azent Overseas Education Online Fair - {element.Country}</div>
    <div className='date'>{element.date}</div>
    <div className='venue'>{element.Venue} | {element.Time}</div>
    <center><button className='button'>Register Now</button></center>
  </div> 
  })

  return (
    <div className='sideBar'>
      <div className='sideBar-innerBox'>
          {country}
      </div>
      <div className='mainBox'>
      <div className='flex'>
        {card}
    </div>
   </div>
    </div>
  )
}
