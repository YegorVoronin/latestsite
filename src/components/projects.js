import React, { useState }from 'react'
import { FaGithub, FaLink, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";
import './css/projects.css'


function Projects() {


    function getDesc(e) {
        console.log(e.target.style);
        e.target.style = ' border-radius: 2%'
        e.target.firstChild.style = 'height: 0%'
    }
    function closeDesc(e){
        e.target.style = ' border-radius: 100%'
        e.target.firstChild.style = 'height: 100%'
    }
    function goRevelarGit(params) {
        window.open('https://github.com/YegorVoronin/revelar')
        
    }
    function goProStoreGit(params) {
        window.open('https://github.com/YegorVoronin/ProStore')
        
    }
    function goChatroomGit(params) {
        window.open('https://github.com/YegorVoronin/chatroom')
        
    }
    function goXPGit(params) {
        window.open('https://github.com/YegorVoronin/WindowXP')
        
    }
    return (
        <div className='projects'>
            <div className="row">
                {/* ITEM 1 */}
                <div tabindex="-1" className="items" onFocus={getDesc} onBlur={closeDesc}>
                    <div className="cover" id='revelar'></div>
                    <div className="title" id='margin'>Revelar</div>
                    <div className="code" id='margin' onClick={goRevelarGit}>
                        <FaGithub className='git' id="link"></FaGithub> Code
                    </div>
                    <div className="app" id='margin'>
                        {/* <FaLink className='link' id="link"></FaLink> App */}
                    </div>
                    <div className="tech" id='margin'>
                        <FaHtml5 className="html"id="link"></FaHtml5>
                        <FaCss3Alt className="css" id="link"></FaCss3Alt>
                        <FaJsSquare className="js" id="link"></FaJsSquare>
                        <FaReact className="react" id="link"></FaReact>
                    </div>
                    <div id='margin'>
                        <GiSmartphone></GiSmartphone>
                        <GrPersonalComputer></GrPersonalComputer>
                    </div>
                    <div className="desc" id='margin'>
                        A website I made for Revelar Global. It is not yet posted on their original url.
                        It is a resposive website built in React, and my favorite features are the CSS animations.
                        Also, it has the basics of any website, forms, sliding menu, etc.
                    </div>
                </div>

                {/* ITEM 2 */}
                <div tabindex="-1" className="items" onFocus={getDesc} onBlur={closeDesc}>
                    <div className="cover" id='prostore'></div>
                    <div className="title" id='margin'>ProStore</div>
                    <div className="code" id='margin' onClick={goProStoreGit}>
                        <FaGithub className='git' id="link"></FaGithub> Code
                    </div>
                    <div className="app" id='margin'>
                        {/* <FaLink className='link' id="link"></FaLink> App */}
                    </div>
                    <div className="tech" id='margin'>
                        <FaHtml5 className="html"id="link"></FaHtml5>
                        <FaCss3Alt className="css" id="link"></FaCss3Alt>
                        <FaJsSquare className="js" id="link"></FaJsSquare>
                    </div>
                    <div id='margin'>
                        <GiSmartphone></GiSmartphone>
                        <GrPersonalComputer></GrPersonalComputer>
                    </div>
                    <div className="desc" id='margin'>
                        This is the front-end of a responsive drone shopping website. 
                        It is a one page site, and it includes features widely used today, 
                        such as a cart for items, form validation, and a search bar, 
                        among others. This website was designed with Adobe XD, and 
                        made purely with HTML, CSS, and JavaScript.
                    </div>
                </div>
            </div>
            <div className="row">
                {/* ITEM 3 */}
                <div tabindex="-1" className="items" onFocus={getDesc} onBlur={closeDesc}>
                    <div className="cover" id="chat"></div>
                    <div className="title" id='margin'>Chatroom</div>
                    <div className="code" id='margin' onClick={goChatroomGit}>
                        <FaGithub className='git' id="link"></FaGithub> Code
                    </div>
                    <div className="app" id='margin'>
                        {/* <FaLink className='link' id="link"></FaLink> App */}
                    </div>
                    <div className="tech" id='margin'>
                        <FaHtml5 className="html"id="link"></FaHtml5>
                        <FaCss3Alt className="css" id="link"></FaCss3Alt>
                        <FaJsSquare className="js" id="link"></FaJsSquare>
                        <FaNodeJs className="node"></FaNodeJs>
                    </div>
                    <div id='margin'>
                        <GiSmartphone></GiSmartphone>
                        <GrPersonalComputer></GrPersonalComputer>
                    </div>
                    <div className="desc" id='margin'>
                        This the progress I made on a basic chatroom app, made with NodeJS. 
                        It is my first app using
                        NodeJS, and I enjoyed using it. I am currently working on this app.
                    </div>
                </div>

                {/* ITEM 4 */}
                <div tabindex="-1" className="items" onFocus={getDesc} onBlur={closeDesc}>
                    <div className="cover" id='xp'></div>
                    <div className="title" id='margin'>Windows XP</div>
                    <div className="code" id='margin' onClick={goXPGit}>
                        <FaGithub className='git' id="link"></FaGithub> Code
                    </div>
                    <div className="app" id='margin'>
                        {/* <FaLink className='link' id="link"></FaLink> App */}
                    </div>
                    <div className="tech" id='margin'>
                        <FaHtml5 className="html"id="link"></FaHtml5>
                        <FaCss3Alt className="css" id="link"></FaCss3Alt>
                        <FaJsSquare className="js" id="link"></FaJsSquare>
                    </div>
                    <div id='margin'>
                        <GiSmartphone></GiSmartphone>
                    </div>
                    <div className="desc" id='margin'>
                        Although this app is not responsive, it is quite nostalgic. 
                        One of my favorite apps I've made, although it doesn't have 
                        a purpose apart from learning. It was built purely with 
                        HTML, CSS, and JavaScript. Currently, it includes a clock, 
                        drag and drop, and a few more functions.
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Projects
