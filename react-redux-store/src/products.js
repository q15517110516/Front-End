import React, { Component } from 'react';
import price from './price';

class Products extends Component{
    render(){
        const productItems = this.props.products.map(products =>(

            <a href={`#$(product.id)`} onClick={this.props.handleAddToCart}>
                <p>
                {products.title}
                </p>
            </a>
        ))
    
        return(
            {productItems}
        )

    }
    

    
}

export default Products;