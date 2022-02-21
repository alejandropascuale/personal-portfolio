import React, { useState, useEffect } from 'react'

import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
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
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'webApi':
        setData(webPortfolio);
        break;
      case 'mobileApp':
        setData(mobilePortfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      case 'branding':
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Projects</h1>
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
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt={`${d.id} - ${d.title}`} />
            <h3>{d.title}</h3>
          </div>
        ))
        }
      </div>
    </div>
  )
}
