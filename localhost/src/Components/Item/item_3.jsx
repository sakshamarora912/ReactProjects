import React from 'react'
import './item_shared.css'

const Item_3 = (props) => {
  return (
    <div className='plan-child'>
        <h1 className='plan_type'>{props.type}</h1> 
        <h2 className='plan_tag'>{props.tag}</h2>
        <h2 className='plan_price'>{props.price}</h2>
        <p className='plan_features'>{props.features}</p> <hr/>
    </div>
  )
}

export default Item_3;