import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import './index.css';
import { alignProperty } from '@mui/material/styles/cssUtils';


const Login = () => {
    const { isLoggedIn, login, setUserName, userName } = useAuth(); // Access the authentication context
    const navigate = useNavigate();
    

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
    // console.log(formData)
    //     function handleSubmit(event) {
        //         event.preventDefault()
        
        //    }
const handleSubmit = async (e) => {

    // const navigateTo = useNavigate();
    e.preventDefault();
    console.log(formData);
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
    
    <div className="form-container">
        <h1>Welcome to Cultrify</h1><br/>
            <form className="form" onSubmit={handleSubmit}>
                <label> Username </label><br/>
                <input 
                    type="text" 
                    placeholder="username"
                    className="form-input"
                    name="username"
                    onChange={handleChange}
                    value={formData.username}
                /><br/>
                <label> Password </label><br/>
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form-input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                /><br/>
                
                <button className="form-submit"> Sign in </button><br/>
                { /* eslint-disable-next-line react/no-unescaped-entities */}
                <p style={{textAlign: "right"}}><em> Don't have an account? </em> <a style={{color: "#FF8080"}}href="https://cucina-mondo.onrender.com/register">Register Here</a></p>
            </form>
        </div>
  )
}

export default Login