import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './saved-recipe.css';
import { useNavbar } from '../../components/Navbar/NavbarContext';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";



const SavedRecipesPage = () => {
const user_id = localStorage.getItem('user')
// const user_id = 4 
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { navbarPosition } = useNavbar();

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvu7ysgku'
    }
  })

  // const recipeRef = useRef(recipeList)

  useEffect(() => {
    async function getSavedRecipes() {
      try {
        const res = await axios.get(`http://127.0.0.1:5000/saved/${user_id}`);
        const recipes = res.data.saved_recipes;
        setRecipeList(recipes);
      } catch (error) {
        console.error('Error fetching saved recipes:', error);
      }
    }
    getSavedRecipes();
  }, []);

  console.log(recipeList)

  return (
    <div id='saved-recipe-page' className={navbarPosition === 'closed' ? 'closed' : ''}>
      <div id='saved-title'>
        <h1>Saved Recipes</h1>
      </div>

      <div id='saved-recipe-sect' >
        {recipeList.map((recipe, index) => (
          <Link key={index} id='recipe-card-saved' data-testid='recipe-card-saved' className='saved-link' to={`/recipe/${recipe.id}`}>
          <div  id='content-container'>
            <div id='img-sect'>
            <AdvancedImage cldImg={cld.image(recipe.img_url)}/>
            </div>
            
            <div id='info-sect-saved-card'>
              <h3>{recipe.name}</h3>
              <p>{recipe.culture}</p>
            </div>
            
            <div id='view-recipe-link'>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SavedRecipesPage;
