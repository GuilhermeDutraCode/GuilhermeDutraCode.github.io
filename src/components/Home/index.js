import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLeters from "../AnimatedLetters";
import Loader from "react-loaders";

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ',' G', 'u', 'i', 'l', 'h', 'e', 'r', 'm', 'e ',' ', 'D','u','t','r','a', ' ']
    const jobArray = ['y','o','u','r',' ' ,' w', 'e','b',' ', ' d','e','v','e','l','o','p','e','r' ]

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    },  [])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm  
                <AnimatedLeters  letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                <AnimatedLeters  letterClass={letterClass} strArray={jobArray} idx={22}/>
                    
                </h1>
                <h2>Full Stack | Front-End | Backend</h2>
                <Link to="/contact" className="flat-button"> CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home

