import React from 'react';
import pizza_logo from '../../public/imgs/pizza_logo.jpg'
import { Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {TbCircle1Filled,TbCircle2Filled,TbCircle3Filled,TbCircle4Filled} from 'react-icons/tb'
const Footer = () => {
    return (
        <div className="bg-gray-700 mt-6">

            <div className=" justify-center align-items-center ">
                <h1 className="py-6">PIZZA EXPRESS</h1>
                <p className="text-white">Để đặt bánh pizza, vui lòng liên hệ tổng đài số: (024) 36.888.777</p>

                <p className="text-white">Để phản ánh chất lượng dịch vụ, vui lòng gọi số: 0977.128.833</p>

                <p className="text-white">Email: lienhepizzaexpress@gmail.com</p>

                <p className="text-white">Chính sách bảo mật thông tin cá nhân</p>

                <p className="text-white">Chính sách đổi/trả sản phẩm và hoàn tiền</p>

                <p className="text-white">Chính sách thanh toán</p>
            </div>

            <div className=" flex justify-between text-white py-6">
            
            
              <div >
          
                   <TbCircle1Filled />
                   <p>
                   107 D3 Ngọc Khánh, Ba Đình
                   </p>

                   
                  
              </div>

            <div>
                  <TbCircle2Filled/>
                 <p>14 Ngõ 497 Nguyễn Trãi, Thanh Xuân</p>
            </div>

               <div>
                    <TbCircle3Filled/>
                    <p>6 Đồng Bát, Cầu Giấy</p>
                </div>

            <div>
                    <TbCircle4Filled/>
                    <p>52 Kim Đồng, Hoàng Mai</p>
            </div>

            </div>
           
            
      <p className="text-white py-4">&copy; 2023 Your Company</p>
        
            
        </div>
    );
};

export default Footer;