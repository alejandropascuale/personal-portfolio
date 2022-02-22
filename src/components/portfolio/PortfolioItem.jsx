import React from 'react'

export default function PortfolioItem({ sites }) {
  return (
    <div className="item">
        <img src={sites.img} alt={`${sites.id} - ${sites.title}`} />
        <h3>{sites.title}</h3>
    </div>
  )
}