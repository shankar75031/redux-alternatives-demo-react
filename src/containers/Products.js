import React, { useContext } from "react";
import { useSelector } from "react-redux";

import ProductItem from "../components/Products/ProductItem";
import { ProductsContext } from "../context/productsContext";
import { useStore } from "../hooks-store/store";
import "./Products.css";

const Products = (props) => {
  // const productList = useContext(ProductsContext).products;
  const [state, dispatch] = useStore();
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
