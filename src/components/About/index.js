import './index.scss';
import AnimatedLeters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    },  [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLeters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e' ]}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a Sydney based Junior Software Engineer, with a background in the construction industry. My strengths lie within turning ideas into reality, whilst also being a great communicator and problem-solver.
                </p>
                <p>
                     I am passionate about building services that can be beneficial to the lives of people from all walks of life. I believe that Software Engineering is a great way to deliver essential services to the general public.  
                </p>
                <p>
                    Furthermore in my previous industry I gathered skills that will most certainly benefit myself in this new journey such as resilience, problem solving, a 'can do' mindset and finally similarly to the tech industry being able to happily work with people of all types of cultural and social backgrounds.
                </p>
                <p>
                    I am eager to get into this industry and I am deeply grateful for all opportunities presented to me being them in or outside Sydney and also remotely or in person.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon ={faVuejs} color="#41B883" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon ={faNode} color="#3C873A" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon ={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon ={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon ={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon ={faGitAlt} color="#F1502F" />
                    </div>
                    
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About;