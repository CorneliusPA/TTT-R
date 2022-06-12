const ProductFeedCard = (props) => {
    return ( 
        <>
         <div className="product" >
              
              <div>
                <h3>Name: {props.val.product_name}</h3>
                <h3>Dept: {props.val.dept}</h3>
                <h3>Description: {props.val.product_description}</h3>
                <img src={props.val.product_image} alt="product image" width={"225px"} height={"325px"}/>
                <h3>Price: ${props.props.val.product_price}</h3>
              </div>
             

              <div>
                <input
                  type="text"
                  placeholder="Update Price?"
                  onChange={(event) => {
                    props.setNewPrice(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    props.updateProduct_Price(props.val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    props.deleteProduct(props.val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
        </>
     );
}
 
export default ProductFeedCard;