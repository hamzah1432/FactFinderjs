import { useState } from "react";

function SetPassword() {
    const [showPass, setShowPass] = useState(false)
    const [showConfPass, setShowConfPass] = useState(false)
    const [formData, setFormData] = useState({
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
            <div className='Auth'>
                <div className='LeftSide'>
                    <img src="/logo.png" alt="logo" />
                </div>
                <div className='RightSide'>
                    <a >
                        <img style={{ cursor: "pointer" }} src="/BackButton.png" alt="BackIcon" />
                    </a>
                    <div className='Form'>
                        <div className="SetPasswprd">
                            <h1>Set Password</h1>
                            <h2>Create new password. Ensur it differ from<br />previous ones for security</h2>
                            <form className="SetPasswprdForm" onSubmit={handleSubmit}>
                                <div>
                                    <label >Create Password</label>
                                    <div className="IconBox">
                                        <input
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
                                            <span style={{ color: "black" }} className="material-symbols-outlined" onClick={() => { setShowPass(!showPass) }}>
                                                visibility
                                            </span>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <label >Re-enter Password</label>
                                    <div className="IconBox">
                                        <input
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
                                            <span style={{ color: "black" }} className="material-symbols-outlined" onClick={() => { setShowConfPass(!showConfPass) }}>
                                                visibility
                                            </span>
                                        }
                                    </div>
                                </div>

                                <button type="submit">Rest Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SetPassword;