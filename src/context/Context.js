import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { CartReducer } from "./Reducer";

const Api = "https://dummyjson.com/products";
const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
  });

  useEffect(() => {
    const fetchApiData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products);
        console.log(data, "this is sparta");
      } catch (error) {
        console.log(error);
      }
    };

    fetchApiData(Api);
  }, []);


  return (
    <Cart.Provider value={{ state, dispatch, products}}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
