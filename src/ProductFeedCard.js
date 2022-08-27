const ProductFeedCard = (props) => {
    return ( 
        <>
         <div className="product" >
              
              <div>
                <h3>Name: {props.val.product_name}</h3>
                <h3>Dept: {props.val.dept}</h3>
                <h3>Description: {props.val.product_description}</h3>
                <img src={props.val.product_image} alt="product image" width={"200vw"} height={"300vh"}/>
                <h3>Price: ${props.val.product_price}</h3>
              </div>
            </div>
        </>
     );
}
 
export default ProductFeedCard;