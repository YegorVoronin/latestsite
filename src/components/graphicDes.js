import React from 'react'
import {useState} from 'react'
import './css/design.css'
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";

function GraphicDes() {
    const open = '80vh'
    const closed = '0vh'
    const [img1, setImg1] = useState(open)
    const [img2, setImg2] = useState(closed)
    const [img3, setImg3] = useState(closed)
    const [img4, setImg4] = useState(closed)
    const [rBtn, setRBtn] = useState('initial')
    function goRight(params) {
        if (img1 === open) {
            setImg1(closed)
            setImg2(open)
        } else if (img2 === open) {
            setImg2(closed)
            setImg3(open)
        } else if (img3 === open) {
            setImg3(closed)
            setImg4(open)
        } else if (img4 === open) {
            setImg4(closed)
            setImg1(open)
        } 
    }
    function goLeft(params) {
        if (img1 === open) {
            setImg1(closed)
            setImg4(open)
        } else if (img2 === open) {
            setImg2(closed)
            setImg1(open)
        } else if (img3 === open) {
            setImg3(closed)
            setImg2(open)
        } else if (img4 === open) {
            setImg4(closed)
            setImg3(open)
        } 
    }
    return (
        <div className='design'>
            <div className="carousel">
                <button className="back" onClick={goLeft}><FaArrowLeft></FaArrowLeft></button>
                    <div className="img1" style={{
                        width: img1
                    }}
                    ></div>
                    <div className="img2" style={{
                        width: img2
                    }}></div>
                    <div className="img3" style={{
                        width: img3
                    }}></div>
                    <div className="img4"
                    style={{
                        width: img4
                    }}></div>
                <button className="forward" onClick={goRight}><FaArrowRight></FaArrowRight></button>
            </div>
            {/* <div className="img1"></div>
            <div className="img2"></div>
            <div className="img3"></div>
            <div className="img4"></div> */}
        </div>
    )
}

export default GraphicDes
