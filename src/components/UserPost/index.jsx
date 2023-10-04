import React from 'react'
import './index.css'

const UserPost = ({
    username,
    profilePicture,
    dishImage,
    recipeLink,
    briefDescription,
    personalConnection
  }) => {
    return (
      <div className="user-post">
        <div className="user-info">
          <img
            src={
              profilePicture ||
              "https://i.pinimg.com/1200x/c0/c2/16/c0c216b3743c6cb9fd67ab7df6b2c330.jpg"
            } // default image
            alt={`${username}'s Profile`}
            className="profile-picture"
          />
          <h3>{username}</h3>
        </div>
        {dishImage && (
          <img
            src={dishImage} 
            alt="Dish"
            className="dish-image"
          />
        )}
        <div className="post-details">
          <p className="brief-description">{briefDescription}</p>
          <p className="personal-connection">{personalConnection}</p>
        </div>
        <a href={recipeLink} target="_blank" rel="noopener noreferrer">
          🔗 Link to Recipe
        </a>
      </div>
    );
  };
  
  export default UserPost;

