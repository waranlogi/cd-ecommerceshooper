import React from "react";

const Signin = () => {
    return (
        <div className='signin'>
             <div className='signin-container'>
             <h1>Sign IN</h1>
             <div className='signin-fields'>
                    <input type='email' placeholder='Email Address' />
                    <input type='password' placeholder='Password' />
                </div>
                <button>Continue</button>
             </div>

        </div>
    )
}

export default Signin