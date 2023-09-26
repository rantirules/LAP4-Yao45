import React from "react"


const Register = () => {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
    
    })
    // function handleChange(event) {
    //     const {name, value, type } = event.target
    //     setFormData(prevFormData => ({
    //         ...prevFormData
    //     }))
    // }
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
        
    }
  return (
    // <div>Register</div>
    <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form-input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form-input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form-input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />
                
                
                <button className="form-submit"> Sign up </button>
            </form>
        </div>
  )
}

export default Register