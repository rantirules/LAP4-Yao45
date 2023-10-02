import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css';


const Login = () => {
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
        const response = await axios.post('http://127.0.0.1:5000/users/login', {
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
        // const navigateTo = useNavigate();
        // navigateTo('http://127.0.0.1:5000/discover');
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
                
                <button className="form-submit"> Sign in </button>
            </form>
        </div>
  )
}

export default Login