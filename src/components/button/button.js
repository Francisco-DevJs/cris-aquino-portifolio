import React from 'react';
import { Link } from 'react-router-dom';
import './button.css'

const Button = ({ children, type, onClick, path }) => {

    return(
        <Link to={path} className='btn-mobile'>
            <button
            className='btn btn-primary'
            onClick={onClick}
            type={type}
            
            >{children}</button>        
        </Link>
    )
}
export default Button;