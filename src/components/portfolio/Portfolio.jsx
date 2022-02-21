import React, { useState, useEffect } from 'react'

import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const featuredList = [
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'webApi',
      title: 'Web Api'
    },
    {
      id: 'mobileApp',
      title: 'Mobile App'
    },
    {
      id: 'design',
      title: 'Design'
    },
    {
      id: 'branding',
      title: 'Branding'
    }
  ]
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {featuredList.map(item => (
          <PortfolioList 
            title={item.title} 
            key={item.id} 
            active={selected === item.id}
            setSelected={setSelected} 
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAUcompress=1&resize=1200x900" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAUcompress=1&resize=1200x900" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAUcompress=1&resize=1200x900" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAUcompress=1&resize=1200x900" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAUcompress=1&resize=1200x900" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAUcompress=1&resize=1200x900" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}
