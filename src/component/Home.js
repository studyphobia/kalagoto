import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
const Home = () => {
  const {
     products ,
  } = CartState();
console.log(products);
  

  return (
    <div className="home">
      
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
