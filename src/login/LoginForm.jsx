import { useState } from "react";

function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // You can call an API to submit the form data here
    };

    return (
        <>
         <div className='Auth'>
      <div className='LeftSide'>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className='RightSide'>
      <a >
                <img style={{ cursor: "pointer" }} src="/BackButton.png" alt="BackIcon" />
            </a>
            <div className='Form'>
                <div className="Login">
                    <h1>Account Login</h1>
                    <h2>If you are already a member you can login with<br /> your email address and password</h2>
                    <form className="LoginForm" onSubmit={handleSubmit}>
                        <div>
                            <label >Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label >Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="RememberPassword">
                            <label htmlFor=""> <input type="checkbox" />Remember me</label>
                            <a style={{ cursor: "pointer" }} >{" Forget Password"}</a>
                        </div>

                        <button type="submit">Register Account</button>
                    </form>
                    <span>{"Dont have an account? "}<a>Sign up here</a></span>
                </div>
            </div>
      </div>
    </div>
           

        </>
    )
}

export default LoginForm;