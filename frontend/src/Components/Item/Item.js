/* eslint-disable no-template-curly-in-string */
import React from "react";
import './Item.css'
import { Link } from "react-router-dom";

const Item = (Props) => {
    return (
        <div className="item">
          <Link to={'/product/${props.id}'}><img src={Props.image} alt="" /></Link>
          <p>{Props.name}</p>
          <div className="item.price">
            <div className="item-price-new">
                ${Props.new_price}
            </div>
            <div className="item-price-new">
                ${Props.old_price}
            </div>
          </div>
        </div>
    )
}

export default Item