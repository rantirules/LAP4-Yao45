import React from 'react'
import '../../pages/HomePage/home.css'

const HomeCard = ({article}) => {

  return (
    <div id='home-card-cont'>
      <div id='home-card'>
        <div id='img-home-card'>
            <img src={article.image} alt="" />
        </div>
        <div id='card-content'>
            <h3>{article.title}</h3>
            <p> {article.description} </p>
        </div>
      </div>
    </div>
    
  )
}

export default HomeCard
