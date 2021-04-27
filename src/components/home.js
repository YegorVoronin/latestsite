import React, {useState} from 'react'
import './css/home.css'
import Carousel from 'react-elastic-carousel';
import Card from './card'

function Home() {
    const selected = ['100%', '70px']
    const unselected = ['0%', '0vw']
    const [developer, setDeveloper] = useState(selected)
    const [designer, setDesigner] = useState(unselected)
    const [name, setName] = useState(unselected)
    const [unChosenDots, setDots] = useState('#191919')
    const [chosenDot, setChosenDot] = useState('#AFAFAF')
    const [load, setload] = useState('load')
    const [loaddots, setLoadDots] = useState('loaddots')


    function getDeveloper(e) {
        stopAnimation()
        setDeveloper(selected)
        setDesigner(unselected)
        setName(unselected)
        dotSelector(e)     
    }
    function getDesigner(e) {
        stopAnimation()
        setDeveloper(unselected)
        setDesigner(selected)
        setName(unselected)
        dotSelector(e)

    }
    function getName(e) {
        stopAnimation()
        setDeveloper(unselected)
        setDesigner(unselected)
        setName(selected)
        dotSelector(e)    
    }
    function dotSelector(e) {
        var i;
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].style = 'background-color' + unChosenDots
        }
        e.target.style = 'background-color:' + chosenDot
    }
    function stopAnimation(params) {
        setLoadDots('')
        setload('')
    }

    return (
        <div className="home">
           {/* <Carousel>
               {items.map(item => <div key={item.id}>{item.title}</div>)}
               <Card style={{backgroundColor: 'pink'}}></Card>
               <Card number="2"></Card>
               <Card number="3"></Card>
           </Carousel> */}
           <div className="container">
               <div className="developer" id="item"
                    style={{
                        width: developer[0],
                        fontSize: developer[1],
                        animationName: load
                    }}> Developer </div>
               <div className="designer" id="item"
                    style={{
                        width: designer[0],
                        fontSize: designer[1],
                        animationName: load
                    }}
               >Designer</div>
               <div className="name" id="item"
                    style={{
                        width: name[0],
                        fontSize: name[1],
                        animationName: load
                    }}
                >Yegor Voronin</div>            
           </div>
           <div className="navigation">
                    <div id='dot1' onClick={getDeveloper}
                    style={{
                        backgroundColor: chosenDot,
                        animationName: loaddots
                    }}
                    ></div>
                    <div  id='dot2' onClick={getDesigner}
                    style={{
                        backgroundColor: unChosenDots,
                        animationName: loaddots
                    }}
                    ></div>
                    <div  id='dot3' onClick={getName}
                    style={{
                        backgroundColor: unChosenDots, 
                        animationName: loaddots
                    }}
                    ></div>
                </div>
        </div>
    )
}

export default Home
