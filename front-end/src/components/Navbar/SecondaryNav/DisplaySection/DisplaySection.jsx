import React, {useState} from 'react'
import Account from './Account/Account'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const DisplaySection = ({navbarPosition, closeNavbar}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login'); // Replace '/login' with the actual login page path
        closeNavbar();
      };
    const recipe = {
        title: 'Recipe of the Day',
        image: 'https://via.placeholder.com/150', // Replace with the actual recipe image URL
        dishName: 'Delicious Pasta',
        location: 'Italy',
      };

      const cardStyles = {
        backgroundColor: 'transparent', // Background color set to #FF8080
        border: 'none'
      };
       // Define inline styles for the buttons
  const loginButtonStyles = {
    backgroundColor: 'black', // Background color for the login button
    color: 'white', // Text color for the login button
    textTransform: 'none',
    width: '200px',
    fontFamily: 'Nunito, sans-serif',
    borderRadius: '12px'
  };
 
  const typographyStyles = {
    margin: '16px', // Adjust the value to control the gap
    fontFamily: 'Nunito, sans-serif',

  };
  const signUpButtonStyles = {
    backgroundColor: 'transparent', // Transparent background for the sign-up button
    border: 'none', // Remove the border
    color: 'black', // Text color for the sign-up button
    fontWeight:'bold',
    textTransform: 'none',
    fontFamily: 'Nunito, sans-serif',

  };
  return (
    <section>
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
      </Typography >
      <div className="login-buttons-sec">
      <div className="login-button-sec">
        <Button variant="outlined" color="primary" style={loginButtonStyles} onClick={handleLoginClick}>
          Log In
        </Button>
        </div>
        <div className="login-button-sec">
        <Button variant="outlined" color="secondary" style={signUpButtonStyles} onClick={handleLoginClick}
>
          Sign Up
        </Button>
        </div>
      </div>
      </section>
  )
}

export default DisplaySection
