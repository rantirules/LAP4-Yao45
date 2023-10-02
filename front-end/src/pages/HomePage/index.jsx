/* eslint-disable no-unused-vars */

import React, { useState } from 'react'

import { HomeCard } from '../../components'
import './home.css'

const HomePage = () => {

  const [content, setContent] = useState([
    {id:1, image:"home1.jpg", title: "The Power of Sharing a Meal in Building Relationships", description: "Discover how sharing meals can be a catalyst for building meaningful relationships in this engaging article."},

    {id:2, image:"home2.jpg", title: "Kitchen Hacks and Cooking Tips: Making Your Life Easier", description: "Unlock the secrets of a smoother kitchen experience with ingenious kitchen hacks and cooking tips."},

    {id:3, image:"home3.jpg", title: "Cooking with Kids: Fun and Educational Family Bonding", description: "Explore the joy of cooking with kids, where family bonding becomes a delicious and educational adventure."},

    {id:4, image:"home4.jpg", title: "Food and Culture: How What We Eat Defines Who We Are", description: "Discover the profound connection between food and culture, unraveling how our culinary choices shape our identities."}
  ])



  return (
    <div id='home-page'>
      <div id='title'>
        <h1>Explore, Savour, Connect: <span> Culturify </span> Your World!</h1>
      </div>
      <div id='content-cont'>
        <div id='content'>
          {content.map((article) => {
            return <HomeCard key={article.id} article={article} />
          })}
        </div>
      </div>
    </div>
  )
}

export default HomePage
