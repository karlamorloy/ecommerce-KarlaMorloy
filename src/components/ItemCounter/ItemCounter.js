import React, { useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './ItemCounter.css';

const ItemCounter = () => {

    const[counter, setCounter] = useState(0);

    const handlerCounterUp = () => {
        setCounter(counter + 1);
    }

    const handlerCounterDown = () => {
        if (counter === 0){
            setCounter(counter);
        } else {
            setCounter(counter - 1);
        }
    }

    return (
        <div className="shoppingCart">
            <Icon name='cart' />
             <Button.Group>
                <Button onClick={handlerCounterDown}><Icon name='minus square outline' /></Button>
                <Button>{counter}</Button>
                <Button onClick={handlerCounterUp}><Icon name='plus square outline' /></Button>
            </Button.Group>
        </div>
    )
}

export default ItemCounter
