import React from 'react'
import "./css/footer.css"
import { FaGithub } from "react-icons/fa";

function Footer() {
    function goGit(params) {
        window.open('https://github.com/YegorVoronin')
    }
    return (
        <footer>
            <FaGithub className='github-footer' onClick={goGit}></FaGithub>
            
            <div className="email">yegorvoronin9@gmail.com</div>
        </footer>
    )
}

export default Footer
