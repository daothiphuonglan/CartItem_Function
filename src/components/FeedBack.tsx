import React from 'react';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
const FeedBack = () => {

  const [str,setStr]= useState("Tôi phải nói thật sự món ăn ở đây rất ngon . Tôi sẽ quay trở lại lần hai để thưởng thức thêm hương vị ở đây . Mong mọi người sẽ có những giây phút thật tuyệt cùng bữa ăn ngon này . Tôi rất vui khi được chia sẻ những cảm xúc của tôi khi được nói lên nỗi lòng . Tôi sẽ quay lại rất nhiều lần để thưởng thức những món ăn khác nữa . Thật sự rất tuyệt vời . Đúng là ẩm thực bậc nhất , hương vị rất tuyệt làm tôi không thể quên ! ")
  const {readMore, setReadMore}= useState(false)
  
  return (
        <div className="mt-20 bg-violet-200 pt-6">
            <h1>FeedBack From Customer</h1>
        <div className="grid grid-cols-2 gap-2 mt-20 ">
           
  <div className="col-span-1">
    <div className="grid grid-cols-2   ">
     <div >
        <img className="rounded-s-full"  src="https://www.offidocs.com/images/iconpeopleperson.jpg" alt=""  />
        <h3>Anh Duc</h3>
     </div>
     <div className="col-span-1 ">
        <p>
          { readMore? str : `${str.substring(1,200)}...`}

           <Button variant="secondary"
        onClick={()=> setReadMore(!readMore)}
        >

          {
            readMore?("Less"):("More")
          }
          
        </Button>
          </p>
       

       
     </div>
    </div>
  </div>
  <div className="col-span-1">

  <div className="grid grid-cols-2   ">
     <div >
        <img className="rounded-s-full"  src="https://www.offidocs.com/images/iconpeopleperson.jpg" alt=""  />
        <h3>Anh Duc</h3>
     </div>
     <div className="col-span-1 ">
        <p>
          { readMore? str : `${str.substring(1,200)}...`}

           <Button variant="secondary"
        onClick={()=> setReadMore(!readMore)}
        >

          {
            readMore?("Less"):("More")
          }
          
        </Button>
          </p>
       

       
     </div>
    </div>


  </div>
 
</div>


</div>
     
    );
};

export default FeedBack;