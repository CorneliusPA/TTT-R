import { useState, useEffect } from "react";
import './App.css';
import './index.css';
import CardFlip from './CardFlip';
import Axios from "axios";
import Logo from "./Logo";

import Create from "./Create";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  
  const [product_name, setName] = useState("");
  const [dept, setDept] = useState(0);
  const [product_description, setDescription] = useState("");
  const [product_image, setImage] = useState("");
  const [product_price, setPrice] = useState(0);

  const [newPrice, setNewPrice] = useState(0);

  const [productList, setProductList] = useState([]);

  const addProduct = () => {
    Axios.post(`https://cornelius-portfolio.herokuapp.com/create`, {
      product_name: product_name,
      dept: dept,
      product_description: product_description,
      product_image: product_image,
      product_price: product_price,
    }).then(() => {
      setProductList([
        ...productList,
        {
          product_name: product_name,
          dept: dept,
          product_description: product_description,
          product_image: product_image,
          product_price: product_price,
        },
      ]);
    });
  };

  useEffect(() => {
    Axios.get("https://cornelius-portfolio.herokuapp.com/products").then((response) => {
      setListOfProducts(response.data);
    });
  }, []);

  const getProducts = () => {
    Axios.get(`https://cornelius-portfolio.herokuapp.com/products`).then((response) => {
      setProductList(response.data);
    });
  };

  const getTradingCards = () => {
    Axios.get(`https://cornelius-portfolio.herokuapp.com/trading_cards`).then((response) => {
      setProductList(response.data);
    });
  };

  const getFigures = () => {
    Axios.get(`https://cornelius-portfolio.herokuapp.com/figures`).then((response) => {
      setProductList(response.data);
    });
  };

  const getPlushies = () => {
    Axios.get(`https://cornelius-portfolio.herokuapp.com/plushies`).then((response) => {
      setProductList(response.data);
    });
  };

  const getVideoGames = () => {
    Axios.get(`https://cornelius-portfolio.herokuapp.com/video_games`).then((response) => {
      setProductList(response.data);
    });
  };

  const getConsoles = () => {
    Axios.get(`https://cornelius-portfolio.herokuapp.com/consoles`).then((response) => {
      setProductList(response.data);
    });
  };

  const updateProduct_Price = (id) => {
    Axios.put(`https://cornelius-portfolio.herokuapp.com/update`, { product_price: newPrice, id: id }).then(
      (response) => {
        setProductList(
          productList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  product_name: val.product_name,
                  product_description: val.product_description,
                  dept: val.dept,
                  product_image: val.product_image,
                  product_price: newPrice,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteProduct = (id) => {
    Axios.delete(`https://cornelius-portfolio.herokuapp.com/delete/${id}`).then((response) => {
      setProductList(
        productList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <>


     <h1 className="title App">Turbo Tiger Trades </h1>
       <Logo/>
        
   
   
    <div className="App">
    
   
  <div>
    <table style={{backgroundColor:"orange", textAlign:"center", marginLeft:"auto", marginRight:"auto"}}>
        
        <th  onClick={getProducts}>All Products</th>
         <th  onClick={getTradingCards}>Trading Cards</th>
         <th  onClick={getFigures}>Figures</th>
         <th  onClick={getPlushies}>Plushies</th>
         <th  onClick={getVideoGames}>Video Games</th>
         <th  onClick={getConsoles}>Consoles</th>
        
        </table>
  </div>


  

        
  


      <div className="information">
<div className="informationBox" >
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Dept:</label>
        <input
          type="number"
          onChange={(event) => {
            setDept(event.target.value);
          }}
        />
        <label>Description:</label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <label>Image:</label>
        <input
          type="text"
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
        <label>Price:</label>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
       
        </div>
         <button className="boxButton" onClick={addProduct}>Add Product</button>

      </div>
      <div className="products">
        
<div className="productGrid"> 
        {productList.map((val, key) => {
          return ( 
         
            <div className="product">
              
              <div>
                <h3>Name: {val.product_name}</h3>
                <h3>Dept: {val.dept}</h3>
                <h3>Description: {val.product_description}</h3>
                <img src={val.product_image} alt="product image" width={"225px"} height={"325px"}/>
                <h3>Price: ${val.product_price}</h3>
              </div>
             

              <div>
                <input
                  type="text"
                  placeholder="Update Price?"
                  onChange={(event) => {
                    setNewPrice(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateProduct_Price(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteProduct(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div> 

 </div>
    
    
  
     
     
    
  
    

  
  
  
    
    
    </>
)  
}

export default App;