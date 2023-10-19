
import './App.css'
import {Routes,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'


import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { Blog } from './pages/Blog'
import ViewDetail from './components/ViewDetail'
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
     <Route path="/:id" element={<ViewDetail></ViewDetail>}/>
   </Routes>
</Container>

     </ShoppingCartProvider>
      
     
    </>
  )
}

export default App
