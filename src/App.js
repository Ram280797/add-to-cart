import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Cart from "./Cart";
import { Alert, Button } from "bootstrap";
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";
function App() {
  const [products ,setProudct] = useState([
   
      {
        id : 1,
        Name: "iphone",
        Price: 78000,
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
      },
      {
        id : 2,
        Name: "Oneplus",
        Price: 55000,
        img: "https://m.media-amazon.com/images/I/71flXufDnbL._SX679_.jpg ",
      },
      {
        id : 3,
        Name: "Samsung",
        Price:  48000,
        img: " https://cdn1.smartprix.com/rx-iNtIVAEE5-w420-h420/samsung-galaxy-s22-u.jpg",
      },
      {
        id : 4,
        Name: "Pixel",
        Price: 78000,
        img: "https://m.media-amazon.com/images/I/61OJJSFEkBL._SX679_.jpg ",
      },
      {
        id : 5,
        Name: "Ipad",
        Price: 60000,
        img: " https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-202109_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1631751019000",
      },
      {
        id : 6,
        Name: "iwatch",
        Price: 28000,
        img: "https://images.macmerise.com/product/apple-watch-bands/mapwbslbabypink2.jpg ",
      },
   
  ])
  const [cartItems,setCartIems]= useState( [] )


  let addToCart = (product) => {
    setCartIems([...cartItems,product])
    }
   
  let removeFromCart = (product) =>{
  
    const indexVal= cartItems.findIndex(obj => obj.id === product.id);
    cartItems.splice(indexVal,1);
    setCartIems([...cartItems])
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {products.map((product) => {
              return <Card product={product} addToCart={addToCart} cartItems={cartItems}/>;
            })}
          </div>
        </div>
        <div className="col-lg-4">
          <h3>Cart</h3>
          <Cart cartItems={cartItems}  removeFromCart ={removeFromCart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
