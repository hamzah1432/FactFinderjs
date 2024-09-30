import { useState } from 'react';

function SignupForm() {
    const [showPass, setShowPass] = useState(false)
    const [showConfPass, setShowConfPass] = useState(false)
    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        // Add form validation and submission logic here
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log('Form Data Submitted:', formData);
        // You can call an API to submit the form data here
    };

    return (
        <>
            <a >
                <img style={{ cursor: "pointer" }} src="/BackButton.png" alt="BackIcon" />
            </a>
            <div className='Form'>
                <div className="Signup">
                    <h1>Account Signup</h1>
                    <h2>Become a member and enjoy exclusive promotions</h2>
                    <div className="Social">
                        <button className="Google">
                            <img src="/google-logo.png" alt="google logo" />
                            Google
                        </button>
                        <button>
                            <img src="/facebook-logo.png" alt="facebook logo" />
                            Facebook
                        </button>
                    </div>
                    <div className='MiddleLine'>
                        <h3>
                            <span>Or continue with</span>
                        </h3>
                    </div>
                    <form className="SignupForm" onSubmit={handleSubmit}>
                        <input
                            placeholder="Full Name"
                            type="text"
                            id="fname"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Enter Email"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className='IconBox'>
                            <input
                                placeholder="Password"
                                type={!showPass ? "password" : "text"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {showPass ?
                                <span className="material-symbols-outlined" onClick={() => { setShowPass(!showPass) }}>
                                    visibility_off
                                </span>
                                :
                                <span className="material-symbols-outlined" onClick={() => { setShowPass(!showPass) }}>
                                    visibility
                                </span>
                            }
                        </div>
                        <div className='IconBox'>
                            <input
                                placeholder="Confirm Password"
                                type={!showConfPass ? "password" : "text"}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {showConfPass ?
                                <span className="material-symbols-outlined" onClick={() => { setShowConfPass(!showConfPass) }}>
                                    visibility_off
                                </span>
                                :
                                <span className="material-symbols-outlined" onClick={() => { setShowConfPass(!showConfPass) }}>
                                    visibility
                                </span>
                            }
                        </div>

                        <button type="submit">Create Account</button>
                    </form>
                </div>
            </div>
        </>

    );
}

export default SignupForm;
