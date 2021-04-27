import './index.css'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import Home from './components/home'
import Projects from './components/projects'
import GraphicDes from './components/graphicDes.js'
import Contact from './components/contact'
import {Route, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Route exact path ='/' component= {Home}></Route>
      <Route exact path ='/projects' component= {Projects}></Route>
      <Route exact path ='/design' component= {GraphicDes}></Route>
      <Route exact path ='/contact' component= {Contact}></Route>
      <Footer></Footer>
    </div>
  );
}

export default App;
