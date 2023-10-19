
import React from 'react'
import { Blog_News } from '../components/Blog_News'
import {useEffect, useState} from 'react'
import OtherBlog from '../components/OtherBlog';
import Footer from '../components/Footer';

export function Blog (){
  
  const [isVisible, setIsVisible] = useState(true);
  const text = "Welcome my blog";
 

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevIsVisible) => !prevIsVisible);
    }, 1000); // Đổi màu mỗi giây

    return () => {
      clearInterval(interval);
    };
  }, []);

  const textColor = isVisible ? 'red' : 'blue';
    
    return (
        <div>
           
           <div className="bg-black my-4" >
           <h1  style={{ color: textColor }}>{text}</h1>
           </div>

           <div className="grid grid-cols-3 gap-4">
             <div className="col-span-2 bg-gray-200 p-4">
             <Blog_News></Blog_News>
             </div>
               
              <div className="bg-gray-300 p-4">
                <h1>Other Blog</h1>
                <OtherBlog></OtherBlog>
                 
              </div>

              
           </div>
           
                    
           <Footer></Footer>
                
        </div>
    )


}