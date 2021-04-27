import React, {useState} from 'react'
import './css/navbar.css'
import { FaGithub } from "react-icons/fa";
import {Link} from 'react-router-dom'
function Navbar() {
    const [slideNav, setSlideNav] = useState('0%')
    const [navOpen, setNavOpen] = useState(false)
    const [line1Rot, setLine1Rot] = useState("rotate(0deg)")
    const [line1Top, setLine1Top] = useState('0px')
    const [line2Display, setLine2Display] = useState('flex')
    const [line3Rot, setLine3Rot] = useState('rotate(0deg)')
    const [line3Top, setLine3Top] = useState('-0px')
    
    function toggleNav(params) {
        if (navOpen === false) {
            setNavOpen(true)
            setSlideNav('100%')
            setLine1Rot("rotate(45deg)")
            setLine1Top('15px')
            setLine2Display('none')
            setLine3Rot('rotate(-45deg)')
            setLine3Top('-15px')    
        } else if (navOpen === true) {
            setNavOpen(false)
            setSlideNav('0%')
            setLine1Rot("rotate(0deg)")
            setLine1Top('0px')
            setLine2Display('flex')
            setLine3Rot('rotate(0deg)')
            setLine3Top('0px')
        }
    }
    function goGit(params) {
        window.open('https://github.com/YegorVoronin')
    }
    return (
        <div>
            <nav className='main-nav'>
                <div className="logo">
                    <Link to="/" className='router-links'>Yegor Voronin</Link>
                </div>

                <ul className='links'>
                    <li>
                        <Link to="/projects" className='router-links'>Web Dev Projects</Link>
                    </li>
                    <li>
                        <Link to="/design" className='router-links'>Graphic Design</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='router-links'>Contact</Link>
                    </li>
                </ul>
                <div className="burger"onClick={toggleNav}>
                    <div className="line1"
                        style={{
                            transform: line1Rot, 
                            top: line1Top
                        }
                        }
                    ></div>
                    <div className="line2"
                        style={{
                            display: line2Display, 
                        }
                        }
                    ></div>
                    <div className="line3"
                        style={{
                            transform: line3Rot, 
                            top: line3Top
                        }
                        }
                    ></div>
                </div>
            </nav>
            <div 
                className='slideNav'
                style={{
                    width: slideNav
                }}
            >
                <ul className='slide-nav-links'>
                    <li>
                        <Link to="/projects" className='router-links' onClick={toggleNav}>Web Projects</Link>
                    </li>
                    <li>
                        <Link to="/design" className='router-links' onClick={toggleNav}>Graphic Design</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='router-links'onClick={toggleNav} >Contact</Link>
                    </li>
                </ul>
                
                <FaGithub className='github-nav' onClick={goGit}></FaGithub>
                
            </div>
        </div>
        
    )
}

export default Navbar
