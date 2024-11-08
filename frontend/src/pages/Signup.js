import React from 'react';
import './App.css';

function Signup() {
    return (
        <div className="container">
            <h1>Signup</h1>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button>Sign up</button>
            </form>
        </div>
    );
}

export default Signup;
