import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Notfound from './components/Notfound'
import Product from './components/Product'
import Data from './components/Data'

function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route  path = '/home' element= {<Home />}/>
        <Route  path = '/data' element= {<Data />}/>
        <Route  path = '/about' element= {<About />}/>
        <Route  path = '/contact' element= {<Contact />}/>
        <Route  path = '/product/:id' element= {<Product />}/>
        <Route  path = '*' element= {<Notfound />}/>
      </Routes>
    </Router>
  );
}

export default App;

