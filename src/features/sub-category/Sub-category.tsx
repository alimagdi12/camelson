import React from 'react'
import './Sub-category.scss'
import CategorySwiper from './components/category-swiper/Category-swiper';
import ProductGrid from './components/product-grid/Product-grid';
function SubCategory() {
  return (
    <div className='sub-category-container'>
      <CategorySwiper/>
      <ProductGrid/>
    </div>
  )
}

export default SubCategory;