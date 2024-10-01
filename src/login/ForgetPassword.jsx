import { useState } from "react";

function ForgetPassword() {
    const [formData, setFormData] = useState({
        email: '',
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
                <img style={{ cursor: "pointer" }} src="/BackButton.png" alt="BackIcon"  />
            </a>
            <div className='Form'>
                <div className="Login">
                    <h1>Forget Password?</h1>
                    <h2>Please enter your email to reset the<br /> password</h2>
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
                        <button type="submit">Reset Password</button>
                    </form>
                </div>
            </div>
                </div>
            </div>

        </>
    )
}
export default ForgetPassword;