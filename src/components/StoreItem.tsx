import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useState } from "react"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
  }



export function StoreItem ({id,name,price,imgUrl}:StoreItemProps){
    const {getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity, 
      removeFromCart}
      = useShoppingCart()
    
      const quantity= getItemQuantity(id)

      const [selectedSize, setSelectedSize] = useState('');

  const handleSizeSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
    console.log(e.target.value);
  }
   
    return (
        <div>
            <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>

        <select className="w-70 m-3 border-blue-800 " value={selectedSize} onChange={handleSizeSelect}>
        <option value="">-- Chọn kích thước --</option>
        <option value="Lớn">Lớn</option>
        <option value="Bé">Bé</option>
        <option value="Vừa">Vừa</option>
       </select>
       <p>Kích thước đã chọn: {selectedSize}</p>

        <div className="mt-auto">
           {
            quantity===0?( <Button onClick={()=> increaseCartQuantity(id)}>Add To Cart</Button>) : 

            <div className="d-flex align-items-center flex-column"
                 style={{gap:".5rem"}}
                 > 

      
      

                    <div className="d-flex align-items-center justify-content-center"
                     style={{gap:".5rem"}}
                     >
                  <Button onClick={()=> decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in the cart
                 </div>
                  <Button  onClick={()=> increaseCartQuantity(id)}>+</Button>
                    </div>
                 <Button variant ="danger" size="sm" onClick={()=> removeFromCart(id)}>Remove</Button>
            </div>

           }
        </div>
      </Card.Body>
    </Card>
        </div>
    )

}