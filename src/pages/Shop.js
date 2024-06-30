import React from 'react'
import '../App.css';
import BirthStoneCard from '../components/BirthStoneCard';
import CategoriesCard from '../components/CategoriesCard';
import NewProductsCard from '../components/NewProductsCard';
import ProductCard from '../components/ProductCard';
import SearchBox from '../components/SearchBox'
import image1 from '../assets/c-d-x-PDX_a_82obo-unsplash.jpg';
import image2 from '../assets/domino-164_6wVEHfI-unsplash.jpg';
import image3 from '../assets/giorgio-trovato-K62u25Jk6vo-unsplash.jpg';
import image4 from '../assets/irene-kredenets-KStSiM1UvPw-unsplash.jpg';
import image5 from '../assets/olena-bohovyk-ElfJDs4LAQk-unsplash.jpg';
import PriceFilter from '../components/PriceFilter';
const Shop = () => {
  return (
    <>
    <div className='Search'>
    <SearchBox/>
  </div>
  <div className="App">
    <div className='core'>

    </div>
    <div className="left">
      <CategoriesCard categories={myCategories} />
      <NewProductsCard products={products} />
    </div>
    <div className="center">
       <ProductCard products={products}/>
    </div>
    <div className="right">
      <BirthStoneCard/>
      <PriceFilter/>

    </div>
    </div>
    </>
  )
}



export default Shop



const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      imageUrl: image1,
      price: 79.99,
      rating: 4.5,
      badge:"new",
      badgeColor:"secondary",
      description: 'These noise-cancelling headphones offer superior sound quality and long battery life.',
    },
    {
      id: 2,
      name: 'Running Shoes',
      imageUrl: image2,
      price: 59.95,
      rating: 4.2,
      badge:"new",
      badgeColor:"secondary",
      description: 'Lightweight and breathable running shoes designed for comfort and performance.',
    },
    {
      id: 3,
      name: 'Smartwatch',
      imageUrl: image3,
      price: 249.99,
      rating: 4.8,
      badge:"new",
      badgeColor:"secondary",
      description: 'Track your fitness goals and stay connected with this feature-packed smartwatch.',
    },
    {
      id: 3,
      name: 'Smartwatch',
      imageUrl: image4,
      price: 249.99,
      rating: 4.8,
      badge:"new",
      badgeColor:"secondary",
      description: 'Track your fitness goals and stay connected with this feature-packed smartwatch.',
    },{
      id: 3,
      name: 'Smartwatch',
      imageUrl:image5,
      price: 249.99,
      rating: 4.8,
      badge:"new",
      badgeColor:"secondary",
      description: 'Track your fitness goals and stay connected with this feature-packed smartwatch.',
    },{
      id: 3,
      name: 'Smartwatch',
      imageUrl: 'https://example.com/images/smartwatch.jpg',
      price: 249.99,
      rating: 4.8,
      badge:"new",
      badgeColor:"secondary",
      description: 'Track your fitness goals and stay connected with this feature-packed smartwatch.',
    },
  ];
  const myCategories = ['Electronics', 'Clothing', 'Books', 'Sports', 'Toys', 'Homeware'];