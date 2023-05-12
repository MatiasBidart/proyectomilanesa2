import React,{useEffect} from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'



const ProductCard = ({products}) => {
    const productRoute = '/products/' + products.id
    



return (
    <div className="product-card">
        <Link to={productRoute}>
            <div className="image">   
                <img src={products.productImgs[1]} alt="" className="over" id='back-img'></img>             
                <img src={products.productImgs[0]} alt="" id='front-img'></img>
            </div>
        <div className="info">
            <span className="brand"></span>
        <strong >{products.title}</strong>
    <span className="price">Price</span>
    <span className="amount">${products.price[0]}</span></div>
    </Link>
    <button className="cart-button"></button>
    </div>
  )
}

export default ProductCard