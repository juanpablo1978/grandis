
import Item from '../Item/Item';
import { arrayProducts } from '../../data/products';
import'./ItemListContainer.scss';

const ItemListContainer = () => {

    return(    
        <section>

            <div className='item-list-container'>

                <Item product={arrayProducts[0]} />
                <Item product={arrayProducts[1]} />
                <Item product={arrayProducts[2]} />
                <Item product={arrayProducts[3]} />

            </div>
            
        </section>  
    )
}

export default ItemListContainer;
