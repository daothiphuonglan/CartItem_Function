import React from 'react';
import dataHome from '../data/dataHome.json'
import {useState} from 'react'
const OtherBlog = () => {
    const [blogs,setBlogs]= useState(dataHome)
    return (
        <div>
            {
               blogs.map((list)=>{
                     return (
                         <div key={list.id} className="grid grid-cols-2 gap-4 my-6">
                             <div><img className=""src={list.image}/></div>
                            <div>
                            <h6>{list.infor}</h6>
                            <p>{list.date}</p>
                            </div>

                              
                         </div>
                     )
               })
              }
        </div>
    );
};

export default OtherBlog;