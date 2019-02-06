import React from 'react';
import Button from './Button';


const ItemsList = (props) => (
    <div>
        {props.itemsList.map((item, i) => {
            console.log(item);

            return (
                <div key={`${item.name} - ${i}`}>
                    <p>
                        {`${item.name} - ${item.price} zl.`}
                    </p>

                    <Button onClick={() => {
                        props.onClick(item.id);
                    }}>Remove</Button>
                </div>

            )
        })}
    </div>
)

export default ItemsList;