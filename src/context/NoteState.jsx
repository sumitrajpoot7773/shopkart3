import React, { useEffect, useState } from 'react'
import NoteContext from './NoteContext'
import axios from 'axios';

function NoteState(props) {

    let [data,setData]=useState(null);
    let [displayProduct,setDisplayProduct]=useState([]);
    let [productCartItem,setProductCartItem]=useState([]);
    let [toggle, setToggle] = useState(false);

    function getData() {
         let url=`https://dummyjson.com/products`;

         axios.get(url).then((response) => {
            setData(response.data.products);
            console.log(response.data.products)
            
         })
    }
    useEffect(()=>{
      getData();
  },[]);

    function DisplayData(products){
      displayProduct.shift()
      displayProduct.push(products);
      // setDisplayProduct(products);
    }
   
    function HandleProduct(product){
         
        let productExist=productCartItem.find((item)=>item.id === product.id);

        productExist?
        setProductCartItem(productCartItem.map((item)=>item.id === product.id ? {...productExist,quantity:productExist.quantity+1}:item))
        :setProductCartItem([...productCartItem,{...product,quantity:1}])
    }

    function HandleRemoveCart(product){
    
       let productExist=productCartItem.find(item=>item.id === product.id);
      
        productExist.quantity===1?
             setProductCartItem(productCartItem.filter(item=>item.id !== product.id))
             :
             setProductCartItem(
              productCartItem.map((item)=>item.id === product.id?
              {...productExist,quantity:productExist.quantity-1}
              :item
            ))
       
    }

    function DeleteCartProduct(product){
      const updatedCart = productCartItem.filter((item) => item.id !== product.id);
      setProductCartItem(updatedCart);
      if (updatedCart.length === 0) {
        setToggle(false);
      }
    }
    function ClearCartProduct(product){
      setProductCartItem([]);
      setToggle(false);
    }
  return (
    <NoteContext.Provider value={{data,DisplayData,displayProduct,HandleProduct,productCartItem,DeleteCartProduct,ClearCartProduct,HandleRemoveCart,setToggle,toggle}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState