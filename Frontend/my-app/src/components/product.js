import { useEffect, useState } from "react"
 
import { useDispatch ,useSelector} from "react-redux";
import { addToCart } from "../redux/slice";

export function Product (){
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3004/Products')
        .then((res)=>res.json())
        .then((data)=>setProduct(data));
    },[]);

    const selector=useSelector((state)=>state.cart);
    console.log(selector);
    
    const dispatche=useDispatch();
    return<>
    <table className="table table-striped m-3">
        <thead>
             <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                 
             </tr>
        </thead>
        <tbody>
            
                {product.map((product)=>(
                    <tr> 
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                     <td><img src={product.image} alt="upload" width="100px" height="100px"/></td>
                     <td> <button   onClick={()=>dispatche(addToCart(product))}> Add To Cart</button></td>
                     
        
                    </tr>
                ))}
        
        </tbody>
    </table>
    </>
}