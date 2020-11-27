import React from 'react';
import { Link } from "react-router-dom";
import '../styles/WelcomePage.css';

class WelcomePage extends React.Component {
    render() {
        return (
            <section id='welcomePage'>
                <h1 id='homepageLogo'>Habitapp</h1>
                <div>
                    <Link to="/login">
                        <button className="homepageButtons">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="homepageButtons">Register</button>
                    </Link>
                </div>
            </section>
        )
    }
}
export default WelcomePage
