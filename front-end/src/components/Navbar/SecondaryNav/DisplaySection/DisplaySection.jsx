import React, {useState} from 'react'
import Account from './Account/Account'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useAuth } from '../../../Auth/AuthContext';

const DisplaySection = ({navbarPosition, closeNavbar}) => {
    const { isLoggedIn, login, logout,userName } = useAuth();

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login'); // Replace '/login' with the actual login page path
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
        image: '/src/assets/pasta.jpeg', // Replace with the actual recipe image URL
        dishName: 'Delicious Pasta',
        location: 'Italy',
        history: "Pasta dishes originate from the Greeks but were perfected by the Romans. The use of tomato sauces were only introduced in the 18th century and became highly popular due to the high level of Italian immigration in this period."
      };

      const cardStyles = {
        backgroundColor: 'transparent', // Background color set to #FF8080
        border: 'none',
      };
       // Define inline styles for the buttons
  const loginButtonStyles = {
    backgroundColor: '#1c1c1c', // Background color for the login button
    color: 'white', // Text color for the login button
    textTransform: 'none',
    width: '10rem',
    height:'3rem',
    fontFamily: 'Nunito, sans-serif',
    borderRadius: '15px',
    fontSize: '15px'
   
  };

  
 
  const typographyStyles = {
    margin: '16px', // Adjust the value to control the gap
    fontFamily: 'Nunito, sans-serif',

  };
  const signUpButtonStyles = {
    backgroundColor: 'transparent', // Transparent background for the sign-up button
    border: 'none', // Remove the border
    color: '#1c1c1c', // Text color for the sign-up button
    fontWeight:'bold',
    textTransform: 'none',
    fontFamily: 'Nunito, sans-serif',

  };
  return (
    <section className='display-section'>
      {localStorage.getItem('token') ? (
        // Display user's name when logged in
        <>
          <Typography role="text"style={typographyStyles} variant="body2">
            Need some inspiration?
          </Typography> </> ) : (<></>)}
         <Typography style={typographyStyles} variant="h6" gutterBottom>
        {recipe.title}
      </Typography>
     
    <CardMedia style={cardStyles}
      component="img"
      height="140"
      image={recipe.image}
      alt={recipe.dishName}
    />
     
      <Typography style={typographyStyles} variant="body2">
        {recipe.dishName}
        </Typography >
        <Typography style={typographyStyles} variant="body2">
        <FaMapMarkerAlt/> {recipe.location}
        <br/>
        <br/>
        <p className='history-recipe'>{recipe.history}</p>
      </Typography >
      {localStorage.getItem('token') ? (
        // Display user's name when logged in
       
          <button 
            className='mui-btn'
            onClick={handleAddRecipeClick}> 
              <AddCircleOutlineIcon/> 
              <p className='add-recipe'>Add your own recipe</p>
          </button>
    
      ) : (
        // Display login and sign-up buttons when not logged in
        <div className="login-buttons-sec">
          <div className="login-button-sec">
            <Button
              id='button-for-login'
              // variant="outlined"
              // color="primary"
              style={loginButtonStyles}
              onClick={handleLoginClick}
            >
              Log In
            </Button>
          </div>
          <div className="login-button-sec">
            <Button
              variant="outlined"
              color="secondary"
              style={signUpButtonStyles}
              onClick={handleRegisterClick}
            >
              Sign Up
            </Button>
        </div>
      </div>
      )}
      </section>

      
  )
}

export default DisplaySection
