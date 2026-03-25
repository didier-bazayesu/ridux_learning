import React, { useState } from 'react'
import { products } from '../features/products'
import Products from '../prooductsFilter/Products'


function Shopping() {
    const[product ,setProduct] = useState(products);
    const [cart ,setCart] = useState([]);
    const [price , setTotalPrice] =useState (0)

    function handleCount (index){
        const quantity = product[index].quantity +1;
        const updatedProducts = [...product];
        updatedProducts[index].quantity = quantity;
        updatedProducts[index].price=  updatedProducts[index].price * quantity
        setProduct(updatedProducts)
   
    }

    function handleDIsCount (index){
        const quantity = product[index].quantity -1;
        const updatedProducts = [...product];
        const newProducts = updatedProducts.map((item,itemIndex)=> {
            if(itemIndex == index && item.quantity >1 )
                
                return {
                    ...item,
                    quantity:quantity,
                    price : item.price * quantity
                }
            else{
                return item
            }
        })
        setProduct(newProducts)
   
    }

   const  handleAddToCart = (index)=>{
          const currentCart = [...product].filter((__,itemIndex )=> itemIndex ===index);
         setCart(prev=> [...prev,...currentCart]);
         alert(`${currentCart[0].name} added to cart
                ${currentCart[0].quantity} items` )
   }

   function handleRemoveFromCart(index){
       setCart(prev=> [...prev.filter((__,indexItem)=> index !== indexItem)])
   }

  function handleTotalCart(){
       const cartRender = cart.length > 0 && cart.map((item, index) => (
                                                <div key={index}>
                                                    <p>Name: {item.name}</p>
                                                    <p>Quanity: {item.quantity}</p>
                                                    <p>total:$ {item.price}</p>
                                                    <button onClick={() => handleRemoveFromCart(index)}>
                                                        remove from cart
                                                    </button>
                                                </div>
        ));


        let totalPrice = 0;
        cart.map(item=>  totalPrice+= item.price);
        
      return <div>
                 {cartRender}
                 <p>totalAllPrice : ${totalPrice}</p>

             </div> 
    }

  return (
    <div className="shopping-container">
        <div className="cart-container">
            {cart.length > 0 ?handleTotalCart():null}
        </div>

        <div className="product-list">
            {product.length > 0 ? product.map((item, index) => (
                <div key={item.id} className="product-card">
                    <p className="product-name">Name: {item.name}</p>
                    <p className="product-category">Category: {item.category}</p>
                    <p className="product-price">Price: ${item.price}</p>
                    

                    <div className="quantity-controls">
                        <button className="btn qty-btn" onClick={() => handleCount(index)}>+</button>
                        <span className="quantity-text">Qty: {item.quantity}</span>
                        <button className="btn qty-btn" onClick={() => handleDIsCount(index)}>-</button>
                    </div>

                    <button className="btn add-btn" onClick={() => handleAddToCart(index)}>
                        Add to Cart
                    </button>
                </div>
            )) : <p>No products found.</p>}
        </div>
    </div>

  )
}

export default Shopping