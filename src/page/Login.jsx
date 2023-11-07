import React from 'react';

const Login = () => {
    return (
        <div className="containerdiv">
            <section id="loginsection">
                <div className="login-wrapper">
                    <form>
                        <div className="form-group">
                            <label className='login-label' htmlFor="username">Username:</label>
                            <input type="text" id="username" autoComplete="off" required/>
                        </div>

                        <div className="form-group">
                            <label className='login-label' htmlFor="password">Password:</label>
                            <input type="password" id="password" required/>
                        </div>
                        <button>Sign In</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;