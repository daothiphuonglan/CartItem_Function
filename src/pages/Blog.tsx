
import React from 'react'
import {useState, useEffect} from 'react'
import  pizza_blog from  '../../public/imgs/pizza_blog.jpg'
import { Blog_News } from '../components/Blog_News';
import news from '../data/blogData.json'
export function Blog (){
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
      const blinkInterval = setInterval(() => {
        setIsBlinking((prevBlinking) => !prevBlinking);
      }, 1000); // 1000 milliseconds = 1 giây
  
      return () => {
        clearInterval(blinkInterval);
      };
    }, []);
    return (
        <div>
           
                      

                
        </div>
    )


}