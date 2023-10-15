import React from 'react';

import pizza_background from '../../public/imgs/pizza_background.jpg'

import { Nav, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const Banner = () => {
    return (
        <div className="flex columns-2 bg-current">
            <div className="text-white pt-11">
                <h1>
                    WELCOME TO MY STORE 
                </h1>

                <p>
                    The store want to bring your best experience 
                </p>

                <Button variant="primary">

                <Nav >
                    
                    <Nav.Link to="/store" as={NavLink} className='text-white'>Explore More</Nav.Link>
                    
                  </Nav>
                    
                </Button>
            </div>

            <div>
                <img src={pizza_background}/>
            </div>
        </div>
    );
};

export default Banner;