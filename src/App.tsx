
import './App.css'
import {Routes,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'

import {useState} from 'react'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
function App() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
  });
  

  return (
    <>
    
     <ShoppingCartProvider >
     <Navbar/>

<Container>
   <Routes>
     <Route path="/" element={<Home></Home>}/>
     <Route path="/about" element={<About></About>}/>
     <Route path="/store" element={<Store></Store>}/>
   </Routes>
</Container>

     </ShoppingCartProvider>
      
     
    </>
  )
}

export default App
