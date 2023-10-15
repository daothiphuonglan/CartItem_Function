import React from 'react';

const FeedBack = () => {
    return (
        <div className="mt-20 bg-violet-200 pt-6">
            <h1>FeedBack From Customer</h1>
        <div className="grid grid-cols-2 gap-2 mt-20 ">
           
  <div className="col-span-1">
    <div className="grid grid-cols-2   ">
     <div className="col-span-1 gap-4">
        <img  className="w-20 h-20 " src="https://png.pngtree.com/png-clipart/20190618/original/pngtree-beautiful-person-illustration-flower-plant-white-flowers-light-color-png-image_3909402.jpg" alt=""  />
     </div>
     <div className="col-span-1  ">
        " ở bên này nhân viên giao hàng rất nhanh , thân thiện và đáng yêu lắm nhé . Bánh giao nhanh nên khi lên đến nơi thì vẫn nóng "

        <h3>Anh Duc</h3>
     </div>
    </div>
  </div>
  <div className="col-span-1">Column 2</div>
  <div className="col-span-1">Column 3</div>
  <div className="col-span-1">Column 4</div>
</div>


</div>
     
    );
};

export default FeedBack;