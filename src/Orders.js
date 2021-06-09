import React from 'react';
import "./Orders.css";
import Order from "./Order";
import CurrencyFormat from "react-currency-format"; 
import {getBasketTotal} from "./reducer";
import {useStateValue} from "./StateProvider";


function Orders() {
    const [{basket} , dispatch] = useStateValue();
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div classname="orders__order">
            
                       {
                           basket.map(item => {
                              return <Order id={item.id}
                                  title={item.title}
                                  image={item.image}
                                  price={item.price}
                                  rating={item.rating} />
                           })
                       }
            </div>
            <CurrencyFormat 
            renderText = {(value) => (
              <>
              <h3>Order Total : {value} </h3>
              </>
               )}
                decimalScale = {2}
                value = {getBasketTotal(basket)}
               displayType={"text"}
             thousandSeparator ={true}
              prefix={"$"} 
          />
            
        </div>
    )
}

export default Orders
