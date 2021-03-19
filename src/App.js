import React, { useEffect, useState } from 'react';
import MyInput from "./components/myInput/myInput";


function App() {

  const [productsState, setProductsState] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.herokuapp.com/products')
      .then(res => res.json())
      .then(productsArray => {
        const newProductsState = productsArray.map((product) => {
          return product.title
        })
        setProductsState(newProductsState)
        // console.log(productsArray)
      })

    // setTimeout(() => {
    //   setProductsState([
    //     "tooth paste",
    //     "tooth brush",
    //     "mouth wash",
    //     "dental floss",
    //     "mouth guard",
    //   ])
    // }, 2000)
  }, [])

  const hasProducts = productsState.length > 0

  return (
    <div>
      {hasProducts ? <MyInput products={productsState} /> : "Loading..."}
      {/* //products={products}  or the data it self*/}

      {/* <MyInput
        products={[
          "BMW",
          "Mercedes Benz",
          "Porsche",
          "Audi",
          "Jeep",
        ]} /> //products={products}  or the data it self */}
    </div>
  );
}

export default App;
