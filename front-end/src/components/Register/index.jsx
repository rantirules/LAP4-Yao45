import React, { useState, useEffect } from 'react';
import Select from "react-select";
import countryData from "../../assets/countrylist";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useNavbar } from '../Navbar/NavbarContext';
import { Link } from 'react-router-dom';

import '../Login/index.css'
import './style.css'

const Register = () => {

  const { navbarPosition } = useNavbar();


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
    });

    const [selectedOptions, setSelectedOptions] = useState();
    const [usernameAvailable, setUsernameAvailable] = useState(true);
    const [emailAvailable, setEmailAvailable] = useState(true);

    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const checkUsernameAvailability = async () => {
        try {
            const response = await axios.get(`https://lap4-backend.onrender.com/users/${formData.username}`);
            setUsernameAvailable(response.data.available);
        } catch (error) {
            console.error('Error checking username availability', error);
        }
    };

    const checkEmailAvailability = async () => {
        try {
            const response = await axios.get(`https://lap4-backend.onrender.com/users/${formData.email}`);
            setEmailAvailable(response.data.available);
        } catch (error) {
            console.error('Error checking email availability', error);
        }
    };

    useEffect(() => {
        if (formData.username) {
            checkUsernameAvailability();
        }
    }, [formData.username]);

    useEffect(() => {
        if (formData.email) {
            checkEmailAvailability();
        }
    }, [formData.email]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password === formData.passwordConfirm) {
            try {
                const response = await axios.post('https://lap4-backend.onrender.com/users/register', {
                    username: formData.username,
                    email: formData.email,
                    name: formData.name,
                    password: formData.password
                });
                const token = response.data.token;

                // Storing the token in local storage (or cookie)
                localStorage.setItem('token', token);

                console.log('Registration successful:', response.data);
                navigate('/login')
                
                // redirect user
            } catch (error) {
                console.error('Error registering', error);
            }
        } else {
            console.log("Passwords don't match");
        }
    };

    const optionList = countryData.map(country => {
        return {
            value: country["code"], label: `${country['emoji']} ${country['name']}`
        }
    });

    const handleSelect = (data) => {
        setSelectedOptions(data);
    };

    return (
        <div id='login-page-cont' className={navbarPosition === 'closed' ? 'closed' : ''}>
        <div className="signup-form-container">
            <h1 id='signup-title'>Welcome to Culturify</h1>
            <form id="form" onSubmit={handleSubmit}>
            <div id='name-sect'>
                <label id='name'> Name <br/>
                    <input
                        type="text"
                        placeholder="Name"
                        // className="form-input"
                        id='name-input'
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                </label>

                <label id='name'> Username <br/>
                    <input
                        type="text"
                        placeholder="Username"
                        // className="form-input"
                        id='name-input'
                        name="username"
                        onChange={handleChange}
                        value={formData.username}
                        onBlur={checkUsernameAvailability} 
                    />
                </label>
            </div>

            <div id='email-sect'>
                <label id='email'> Email <br/>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="form-input"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </label>
            </div>
            
                
                {!usernameAvailable && <div className="availability-error">Username not available</div>}

            <div id='name-sect'>
                <label id='name'> Password <br/>
                    <input
                        type="password"
                        placeholder="Password"
                        // className="form-input"
                        id='name-input'
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </label>

                <label id='name'> Confirm Password <br/>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        // className="form-input"
                        id='name-input'
                        name="passwordConfirm"
                        onChange={handleChange}
                        value={formData.passwordConfirm}
                    />
                </label>
            </div>
                
                {!emailAvailable && <div className="availability-error">Email not available</div>}

            <div id='email-sect'>
                <label id='email'>Choose your country / countries
                    <div className="dropdown-container">
                        <Select
                            options={optionList}
                            placeholder="Select country"
                            value={selectedOptions}
                            onChange={handleSelect}
                            isSearchable={true}
                            isMulti
                            id='dropdown'/>
                    </div>
                </label>
            </div>
                
                <div id="submit-btn-cont-register">
                    <button className="form-submit"> Sign up </button>
                </div>
                
            </form><br/>
            <p style={{textAlign: "center"}}>
                <em>Already have an account? </em> 
                <Link id='signup-link' to='/login'>Login Here</Link>
            </p>

        </div>
        </div>
    );
};

export default Register;
