import './index.scss'
import '../Layouts/index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailJs from '@emailjs/browser'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef() 
   

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    },  [])


    const sendEmail = (e) => {
        e.preventDefault()
            emailJs
                .sendForm(
                    'gmail',
                    'template_8baqh8s',
                    refForm.current,
                    '8GdturBQ-Iw2ISQH3'
                    )
                    .then (
                        () => {
                            alert('Message sucesfully sent!')
                            window.location.reload(false)
                        },
                        () => {
                            alert('Failed to send message, please try again')
                        }
                    )
    }


    const contactString = 'Contact Me'
    const contactArray = contactString.split("")

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}  
                            strArray={contactArray}
                            idx={15}
                        />
                    </h1>
                    <p>
                    Currently looking forward to an opportunity to work full time as either a back or front end engineer anywhere in Australia. I'm currently based in Sydney, however, I open to work remotely or move for work. If you are in need of a junior software engineer don't hesitate to reach out here.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>   
                            </ul>
                        </form>
                    </div>
                    <div className='info-map'>
                        Guilherme Dutra, 
                        <br />
                        Sydney, Australia, 2088, NSW <br />
                        <span>guilhermedutra02syd@gmail.com</span>
                    </div>
                    
                </div>
                </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact  