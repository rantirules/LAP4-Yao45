import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import './index.css';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { useNavbar } from '../Navbar/NavbarContext';



const Login = () => {
    const { isLoggedIn, login, setUserName, userName } = useAuth(); 
    const navigate = useNavigate();

  const { navbarPosition } = useNavbar();

    

    const [formData, setFormData] = useState({
       
        username: "",
        password: "",
       
    
    })
  
    function handleChange(event) {
        const {name, value } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

const handleSubmit = async (e) => {

    // const navigateTo = useNavigate();
    e.preventDefault();
    // console.log(formData);
    try {
        const response = await axios.post('https://lap4-backend.onrender.com/users/login', {
            username: formData.username,
            password: formData.password
        });
        // console.log(response.data);
        console.log('response status', response.status)
        // console.log('login response', response)
        const token = response.data.token

      
       
        
        // console.log('token', response.data.token)
        localStorage.setItem('token', token);
        console.log('Login successful');
        // redirect user
        console.log(formData.username)
        login(formData.username);
        console.log(userName)
        navigate('/discover');

          //HS code
        
    } catch (error) {
        console.log("Error logging in", error);
        // display error message
    }
}

  return (
    <div id='login-page-cont' className={navbarPosition === 'closed' ? 'closed' : ''}>
    <div className="form-container">
        <h1>Welcome to Culturify</h1><br/>
            <form className="form" onSubmit={handleSubmit}>
                <label> Username
                <input 
                    type="text" 
                    placeholder="Username"
                    className="form-input"
                    name="username"
                    onChange={handleChange}
                    value={formData.username}
                /> </label> <br/>
                <label> Password 
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form-input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                /> </label> <br/>
                <div id="submit-btn-cont">
                    <button className="form-submit" onClick={handleSubmit}> Log in </button><br/>
                </div>
                
                { /* eslint-disable-next-line react/no-unescaped-entities */}
                <p style={{textAlign: "center", fontSize: '15px'}}>
                    <em> Don't have an account? </em> 
                    <Link id='signup-link' to='/register'>Register Here</Link>
                </p>
            </form>
        </div>
        </div>
  )
}

export default Login
