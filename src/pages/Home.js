import "../App.css";
import BirthStoneCard from "../components/BirthStoneCard";
import CategoriesCard from "../components/CategoriesCard";
import MostSold from "../components/MostSold";
import NewProductsCard from "../components/NewProductsCard";
import ProductCard from "../components/ProductCard";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import { useEffect, useState } from "react";


const Home = () => {
  const [prod, setProd] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleCategories = async () => {
    axios
      .get("http://127.0.0.1:8000/products/categories/")
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {});
  };
  const handleProduct = async () => {
    axios
      .get("http://127.0.0.1:8000/products/")
      .then((response) => {
        console.log(response.data);
        setProd(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleProduct();
    handleCategories();
  }, []);
  return (
    <>
      <div className="Search">
        <SearchBox />
      </div>
      <div className="App">
        <div className="core"></div>
        <div className="left">
          <CategoriesCard categories={categories} />
          <NewProductsCard products={prod} />
        </div>
        <div className="center">
          <div>
            <ProductCard products={prod} />
          </div>
        </div>
        <div className="right">
          <BirthStoneCard />
          <MostSold products={prod} />
        </div>
      </div>
    </>
  );
};

export default Home;
