import React, { useEffect } from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLeters from "../AnimatedLetters";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import CarouselFade from "../Carrousel";


const Portfolio = () => {
   
    const [letterClass, setLetterClass] = useState('text-animate'); 
    
    useEffect(() => {
        const timer = setTimeout(()=> {
            setLetterClass('text-animate-hover');
        }, 3000);

        return() =>{
            clearTimeout(timer);
        }
        
    });

    
    

    
    return (
        <> 
            <div className="container portfolio-page"> 
                <h1 className="page-title"> 
                    <AnimatedLeters 
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div> 
                     <CarouselFade />
                </div>
                

            </div>
            <Loader type="pacman" />
        </>
    );
} 

export default Portfolio