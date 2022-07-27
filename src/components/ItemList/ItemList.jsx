import Item from "../Item/Item"

const ItemList = ({dataProducts}) => {
    return(
        <>
        {dataProducts.map ((product) => {
            return <Item key={product.id} product={product}/>
        })}

        </>

        
    )
}

export default ItemList