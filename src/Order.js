import React from 'react';
import "./Order.css";
import {useStateValue} from './StateProvider';


function Order({id,image,title,price,rating}) {
    const [{basket , user} , dispatch] = useStateValue();
    return (
        <div className="order">
          
          <img className="checkoutProduct__image" src={image} />

          <div className="checkoutProduct__info">

          <p className="checkoutProduct__title">{title}</p>

           <p className="checkoutProduct__price">
           <small>$</small>
           <strong>{price}</strong>
         </p>

          <p className="checkoutProduct__rating">
             {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
             ))}

         </p>
         </div>
         
            
        </div>
    )
}

export default Order
