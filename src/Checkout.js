import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";

function Checkout() {

    const [{basket , user},dispatch] = useStateValue();

    return (
        <div className="checkout">

          <div className="checkout__left">
              <img className="checkout__ad" src="data:image/png;base64,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" alt="" />
              <div>
                <h3>Hey,  {user?.email}</h3>
                <h2 className="checkout__title">Your shopping Basket</h2> 

                 {
                     basket.map(item => {
                         return <CheckoutProduct 
                                  id={item.id}
                                  title={item.title}
                                  image={item.image}
                                  price={item.price}
                                  rating={item.rating}
                                />
                     })
                 }
                
              </div>
          </div>

          <div className="checkout__right">
              <Subtotal />
          </div>
            
        </div>
    )
}

export default Checkout;
