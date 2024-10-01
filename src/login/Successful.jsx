function Successful() {


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
                        <div className="Successful">
                            <img width={114} src="/Approve.png" />
                            <h1>Successful</h1>
                            <div>
                                <h2>Congratulation!</h2>
                                <h2>your password has been changed.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Successful;