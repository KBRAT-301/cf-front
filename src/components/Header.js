import React from 'react';
import { Link } from 'react-router-dom';



class Header extends React.Component {
    render() {
        return (
            <>
            <h1>Carbon Footprint</h1>
            <Link to="/">
                Home
            </Link>
            <Link to="/calculator">
                Calculator
            </Link>
            <Link to="/resources">
                Resources
            </Link>
            <Link to="/about">
                About
            </Link>
            </>
        )
    }
}


export default Header