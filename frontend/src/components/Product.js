import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'


const Product = (props) => {
    const {id,
        product: {Category,
            Title,
            Description,
            Price, 
            Stock
            //imageLinks: {thumbnail}
        }
        
        } = props.product;

    return (
 <main>
        <div key={id} className="product">
        <im src={thumbnail} alt={Title} />
        </div>
        <div>
        <h3>{Title}</h3>
        </div>
        <p>{description ? description.join(', ') : "more products coming soon"}</p>
        {price &&<p>£{price.amount}</p>}
        {stock &&<p>£{stock}</p>}
        <div>
        <button type="button" onClick={() => props.addProduct(props.product)}>Add to Cart</button>
        </div>
</main>)


Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.shape({
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired
        }),

        stock: PropTypes.number.isRequired,
        imageLinks: PropTypes.shape({
            thumbnail: PropTypes.string.isRequired
        })
    }).
    
    Product.defaultProps = {
        description: [],
        price: {
            amount: 0,
            currency: "GBP"
        },
        stock: 0,
        imageLinks: {
            thumbnail: ""
        }

    }

}



export default Product;