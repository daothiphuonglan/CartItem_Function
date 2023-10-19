import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';




const ViewDetail = () => {
    const {id} = useParams();
    const [item, setItem]= useState();

   // Ví dụ: mảng con gồm một chuỗi và một giá trị bất kỳ
   if (id !==" ") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => res.json()).then(data => {
        setItem(data.meals[0]);  
    })
}
   

    return (
        <div>
          
         <div className="content">
                
                <div className="inner-content">
                <h1>{item.strMeal}</h1>
                   
                    
                </div>
            
                
                
                </div>
          

        </div>
    )
}

    


export default ViewDetail;