
import './App.css'
import {Routes,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { Home } from './pages/Home'

import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'


import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { Blog } from './pages/Blog'

import About from './pages/About'
function App() {
  
  

  return (
    <>
    
     <ShoppingCartProvider >

     
     <Navbar/>

<Container>
   <Routes>
     <Route path="/" element={<Home></Home>}/>
     <Route path="/about" element={<About></About>}/>
     <Route path="/store" element={<Store></Store>}/>
     <Route path="/blog" element={<Blog></Blog>}/>
     
   </Routes>
</Container>

     </ShoppingCartProvider>
      
     
    </>
  )
}

export default App
