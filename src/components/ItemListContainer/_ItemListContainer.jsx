
const ItemListContainer = ({title, price, image, section}) => {
    return(    
            <div className="itemlist-container">
                <img className="item item-img" src={`assets/${image}`} alt="Angélica Zapata"/>
                <p className="item item-p" >{title}</p>
                <span className="item item-span" >{price}</span>
                <button className="item item-button" >Comprar</button>
            </div>
    )
}

export default ItemListContainer