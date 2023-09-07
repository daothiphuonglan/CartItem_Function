import { Offcanvas, OffcanvasBody,Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import {formatCurrency} from '../utilities/formatCurrency'
import { CartItem } from "./CartItem";
import storeItems from '../data/items.json'

type ShoppingCartProps= {
    isOpen:boolean
}

export function ShoppingCart({isOpen}:ShoppingCartProps){
     const {closeCart, cartItems} = useShoppingCart()
    return (
        <div>
            <Offcanvas show={isOpen} onHide={closeCart} placement="end">
             
             <Offcanvas.Header closeButton>
                  
                  <Offcanvas.Title>
                    Cart
                  </Offcanvas.Title>

                  <OffcanvasBody>
                     <Stack gap={3}>
                         {cartItems.map(item=>(
                            <CartItem key={item.id} {...item}/>
                        )) }
                    
                    <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
                         
                         
                     </Stack>
                  </OffcanvasBody>
             </Offcanvas.Header>
            </Offcanvas>
        </div>
    )
}