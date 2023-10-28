import React, { useState } from 'react'
import Account from './Account/Account'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useAuth } from '../../../Auth/AuthContext';
import './style.css'

const DisplaySection = ({ navbarPosition, closeNavbar }) => {
  const { isLoggedIn, login, logout, userName } = useAuth();

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
    closeNavbar();
  };

  const handleRegisterClick = () => {
    navigate('/register')
    closeNavbar();
  }

  const handleLogoutClick = () => {
    logout()
    navigate('/logout')
    closeNavbar()
  }
  const handleAddRecipeClick = () => {
    navigate('/new-recipe')
    closeNavbar()
  }

  const recipe = {
    title: 'Try our Recipe of the Day',
    image: 'pasta.jpeg',
    dishName: 'Delicious Tomato Pasta',
    location: 'Italy',
    history: "Tomato sauce pasta, originating in Southern Italy, emerged in the late 18th century when tomatoes were recognized as a safe and delicious ingredient. This iconic, simple sauce has since become a staple of Italian cuisine."
  };

  const cardStyles = {
    backgroundColor: 'transparent',
    border: 'none',
  };

  const loginButtonStyles = {
    backgroundColor: '#1c1c1c',
    color: 'white',
    textTransform: 'none',
    width: '7rem',
    height: '3rem',
    fontFamily: 'Nunito, sans-serif',
    borderRadius: '15px',
    fontSize: '15px'

  };



  const typographyStyles = {
    margin: '16px',
    fontFamily: 'Nunito, sans-serif',

  };
  const signUpButtonStyles = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1c1c1c',
    fontWeight: 'bold',
    textTransform: 'none',
    fontFamily: 'Nunito, sans-serif',

  };
  return (
    <section className='display-section'>
      {localStorage.getItem('token') ? (
        // Display user's name when logged in
        <>
          <Typography role="text" style={typographyStyles} variant="body2">
            Need some inspiration?
          </Typography> </>) : (<></>)}
      <Typography style={typographyStyles} variant="h6" gutterBottom>
        {recipe.title}
      </Typography>

      <div id='pasta-img-cont'>
          <CardMedia style={cardStyles}
          component="img"
          height="140"
          image={recipe.image}
          alt={recipe.dishName}
          id='pasta-image'
          />
      </div>
      

      <Typography style={typographyStyles} variant="body2">
        {recipe.dishName}
      </Typography >
      <Typography style={typographyStyles} variant="body2">
        <FaMapMarkerAlt /> {recipe.location}
        <br />
        <br />
        <p className='history-recipe'>{recipe.history}</p>
      </Typography >
      {localStorage.getItem('token') ? (
        // Display user's name when logged in

        <button
          className='mui-btn'
          onClick={handleAddRecipeClick}>
          <AddCircleOutlineIcon />
          <p className='add-recipe'>Add your own recipe</p>
        </button>

      ) : (
        // Display login and sign-up buttons when not logged in
        <div className="login-buttons-sec">
          <div className="login-button-sec">
            <button
              id='button-for-login'
              // variant="outlined"
              // color="primary"
              // style={loginButtonStyles}
              onClick={handleLoginClick}
            >
              Log In
            </button>
          </div>
          <div className="login-button-sec">
            <button
              id='button-for-signup'
              // variant="outlined"
              // color="secondary"
              // style={signUpButtonStyles}
              onClick={handleRegisterClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </section>


  )
}

export default DisplaySection
