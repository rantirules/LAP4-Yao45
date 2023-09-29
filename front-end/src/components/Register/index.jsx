import React, { useState, useEffect } from 'react';
import Select from "react-select";
import countryData from "../../assets/countrylist";
import axios from 'axios';

const Register = () => {
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const checkUsernameAvailability = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/users/${formData.username}`);
            setUsernameAvailable(response.data.available);
        } catch (error) {
            console.error('Error checking username availability', error);
        }
    };

    const checkEmailAvailability = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/users/${formData.email}`);
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
                const response = await axios.post('http://127.0.0.1:5000/users/register', {
                    username: formData.username,
                    email: formData.email,
                    name: formData.name,
                    password: formData.password
                });
                const token = response.data.token;

                // Storing the token in local storage (or cookie)
                localStorage.setItem('token', token);

                console.log('Registration successful:', response.data);
                
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
        <div className="form-container">
            <h1>Welcome to Cultrify</h1>
            <form className="form" onSubmit={handleSubmit}>
            <label> Name </label><br/>
                <input
                    type="text"
                    placeholder="Name"
                    className="form-input"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                /><br />
                <label> Email </label><br/>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form-input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                /><br />
                <label> Username </label><br/>
                <input
                    type="text"
                    placeholder="username"
                    className="form-input"
                    name="username"
                    onChange={handleChange}
                    value={formData.username}
                    onBlur={checkUsernameAvailability} 
                /><br />
                {!usernameAvailable && <div className="availability-error">Username not available</div>}
                <label> Password </label><br/>
                <input
                    type="password"
                    placeholder="Password"
                    className="form-input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                /><br />
                <label> Confirm Password </label><br/>
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form-input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                /><br />
                {!emailAvailable && <div className="availability-error">Email not available</div>}
                <label>Choose your country / countries</label>
                <div className="dropdown-container">
                    <Select
                        options={optionList}
                        placeholder="Select country"
                        value={selectedOptions}
                        onChange={handleSelect}
                        isSearchable={true}
                        isMulti
                    />
                </div>
                <button className="form-submit"> Sign up </button>
            </form>
        </div>
    );
};

export default Register;
