import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'


const Product = (props) => {
    const {id,
        product: {category,
            title,
            description,
            price, 
            stock,
            imageLinks: {thumbnail}
        }
        } = props.product;

    return (
 <main>
        <div key={id} className="product">
        <im src={thumbnail} alt={title} />
        </div>
        <div>
        <h3>{title}</h3>
        </div>
        <p>{description ? description.join(', ') : "more products coming soon"}</p>
        {price &&<p>£{price.amount}</p>}
        {stock &&<p>{stock}</p>}
        {category &&<p>{category}</p>}
        <div>
        <button type="button" onClick={() => props.addProduct(props.product)}>Add to Cart</button>
        </div>
    </main>)

}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.shape({
            amount: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        imageLinks: PropTypes.shape({
            thumbnail: PropTypes.string.isRequired
        })
    })

        // stock: PropTypes.number.isRequired,
        // imageLinks: PropTypes.shape({
        //     thumbnail: PropTypes.string.isRequired
        // })
    })

};
    
Product.defaultProps = {
    products : {
        price : {
            amount: 'No price available'
        },
    }

}




export default Product;

// function Product() {
//   return "This is the output of a Product component. Replace this string with code to display an individual product's attributes.";
// }

// export default Product;