import React from 'react';

import {useState} from 'react'
import news from '../data/blogData.json'

type Blog_News= {
     id:number   
     image:string    
     name:string  
     infor: string   

}
export function Blog_News( ) {
     const [listBlog,setListBlog]= useState(news)
     return (
          
         <div >
              {
               listBlog.map((list)=>{
                     return (
                         <div key={list.id}>
                              <img src={list.image}/>
                              <h1>{list.name}</h1>
                              <p>{list.infor}</p>
                         </div>
                     )
               })
              }
         </div>
     )
     
   
    
    
    
}

      
      
    


