import { useState } from "react"

import './ItemCount.scss'

const ItemCount = ({ onAdd, stock, initial=1 }) => {

    const[count, setCount] = useState (1)

    const addNumber = () => { 
        setCount(count + 1)
    }

    const subtractNumber = () => {
        setCount(count - 1)
    }
    
    return(
        <div className="itemcount-container">
            <div className="itemcount-container__controls">
                <button disabled={ count === initial } onClick={subtractNumber} className="button-count" >-</button>
                <p className="paragraph-count" >{count}</p>
                <button disabled={count === stock} onClick={addNumber} className="button-count" >+</button>
            </div>
            <button onClick={ ()=>{onAdd(count)} } className="item item-button">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount