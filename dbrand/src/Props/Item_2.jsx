import React from 'react';
import './Item.css'

const Item_2 = ({category, type, model }) => {
    return (
        <div className="Item_2">
            <div className="flexData">
                <h1 className="category">{type}</h1>
                <p className="model">{model}</p>
            </div>
        </div>  
    );
};

export default Item_2;