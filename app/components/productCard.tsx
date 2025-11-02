import React from 'react'
import AddToCart from './Addtocart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={`p-5 my-5 bg-sky-white text-xl hover:bg-sky-200 rounded-lg shadow-md ${styles.card}`}>
      <AddToCart />
    </div>
  )
}

export default ProductCard
