import React from 'react';
import Sphere from '../images/sphere-logo.png';

const Hero = () =>{
    return (
        <div className="hero">
            <img src={Sphere} className="logo"/>
            <h1>Sphere Component Library</h1>
        </div>
    )
};

export default Hero