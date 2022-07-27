import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.scss';

const Item = ({product}) => {

    const { title, price, image, stock } = product;

    const onAdd = (qty) => {
        alert(`Se agregó ${qty} productos`)
    }

  return (
    <article className="item-container">
                <img className="item-container__img" src={`assets/${image}`} alt="Imagen producto"/>
                <p className="item-container__title" >{title}</p>
                <span className="item-container__price" >${price}</span>
                <ItemCount
                    stock={ stock }
                    initial={1}
                    onAdd={onAdd}
                />
                <p className="item-container__stock" >Stock - {stock}</p>
                
    </article>
  )
}

export default Item