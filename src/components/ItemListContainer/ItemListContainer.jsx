import { useEffect, useState } from 'react'; 
//import Item from '../Item/Item';
import { arrayProducts } from '../../data/products';
import'./ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
//import { list } from 'postcss';

const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState ([])

const logPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve (arrayProducts)
    }, 2000);      
})

useEffect (() => {
    logPromise.then ((res) => {
        // console.log(res);
            setListProducts(res)
        })
        .catch( (error) => {
                console.log("La llamada falló");
        })

        .finally( () => {
        // console.log();
        })
}, [])
    

    return(    
        <section>

            <div className='item-list-container'>
                <ItemList dataProducts={listProducts}/>
            </div>
            
        </section>  
    )
}


export default ItemListContainer;
