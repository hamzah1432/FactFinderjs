import React from 'react';

function VerifyForm() {

    const formatEmail = (email) => {
        const newEmail = email.replace(/^(.{5}).*(@.*)$/, '$1...$2');
        return newEmail;
    };

    const handleInput = (e) => {
        const input = e.target;
        if (input.value.length === 1) {
            const nextInput = input.nextElementSibling ;
            if (nextInput) nextInput.focus(); // Auto-focus to the next input
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
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
                <div className="Verify">
                    <div>
                        <h1 style={{ marginBottom: 20 }}>Check your email</h1>
                        <h2>
                            {`We sent a reset link to ${formatEmail("khaled123@gmail.com")}`}
                            <br />
                            Enter the 5-digit code mentioned in the email.
                        </h2>
                    </div>

                    <div>
                        <form className="VerifyForm" onSubmit={handleSubmit}>
                            <div className="code">
                                <input
                                    type="text"
                                    maxLength={1}
                                    aria-label="verification code digit 1"
                                    onInput={handleInput}
                                    inputMode="numeric"
                                    required
                                />
                                <input
                                    type="text"
                                    maxLength={1}
                                    aria-label="verification code digit 2"
                                    onInput={handleInput}
                                    inputMode="numeric"
                                    required
                                />
                                <input
                                    type="text"
                                    maxLength={1}
                                    aria-label="verification code digit 3"
                                    onInput={handleInput}
                                    inputMode="numeric"
                                    required
                                />
                                <input
                                    type="text"
                                    maxLength={1}
                                    aria-label="verification code digit 4"
                                    onInput={handleInput}
                                    inputMode="numeric"
                                    required
                                />
                                <input
                                    type="text"
                                    maxLength={1}
                                    aria-label="verification code digit 5"
                                    onInput={handleInput}
                                    inputMode="numeric"
                                    required
                                />
                            </div>
                            <button type="submit">Verify Code</button>
                        </form>
                    </div>
                    <span>{"Haven't got the email yet? "}<a href='#'>Resend email</a></span>
                </div>
            </div>
      </div>
    </div>
           
        </>

    );
}

export default VerifyForm;
