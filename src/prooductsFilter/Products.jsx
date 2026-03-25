import React, { useState } from 'react'
import { products } from '../features/products';


function Products() {
    const [product] = useState(products);
    const [input, setInput] = useState('');
    const [select ,setSelect]=useState('');

    function handleFilterProduccts(){
        // const searchedItem =  
        return product.filter(item => {
            const searchedItem = input.toLowerCase();
            const selectedCategory = select.toLowerCase();
           
            if(selectedCategory && selectedCategory !== item.category.toLowerCase()) {
                return false; // Skip products that don't match the selected category
            }

          return   item.name.toLowerCase().includes(searchedItem) || item.category.toLowerCase().includes(searchedItem)|| item.price.toString().includes(searchedItem);  
        });
    }
    const filteredProducts = handleFilterProduccts()? handleFilterProduccts() : product;

    function handleClear(){

        setInput('');
        setSelect('');   
    }
    

  
    return (
        <div className="products-container">
            <h2 className="title">Product List</h2>



            <input
                type="text"
                className="search-input"
                placeholder="Search product..."
                value={input}
                onChange={(e) => setInput(e.target.value)}

            />
            <select name="" id="" className='category-select'
              onChange={(e)=>{setSelect(e.target.value)}}
              value={select}
            
            >
                <option value="">All Categories</option>
                {[...new Set(products.map(item => item.category))].map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
                
            </select>

            <button className="clear-btn" onClick={handleClear}>
              Clear
            </button>

            <div className="product-list">
                {filteredProducts.length >0 ?filteredProducts.map(item => (
                    <div key={item.id} className="product-card">
                        <p className="product-name">Name: {item.name}</p>
                        <p className="product-category">Category: {item.category}</p>
                        <p className="product-price">Price: ${item.price}</p>
                    </div>
                )) : <p>No products found.</p>}
            </div>
        </div>
    );
}

export default Products;
