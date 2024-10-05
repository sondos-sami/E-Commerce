import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart, incrementQuantity, decrementQuantity } from "../redux/slice";

export function Cart() {
  const cart = useSelector((state) => state.cart) 
  const dispatch = useDispatch();
  let item=0;
  let totalPrice=cart.reduce((acc,product)=>{
   acc+=product.price*product.quantity;
   item+=product.quantity;
   return acc;
  },0)

  return (
    <section className="h-100">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0">Shopping Cart</h3>
            </div>
            <h6 className="btn" onClick={() => dispatch(clear())}>Delete all items</h6>
            {
              cart.map((product) => (
                <div key={product.id} className="card rounded-3 mb-4">
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={product.image}
                          className="img-fluid rounded-3"
                          alt={product.name}
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-4">
                        <p className="lead fw-normal mb-2">{product.name}</p>
                        <p>
                        <span className="text-muted d-block "> {product.title} </span>
                        <span className="text-muted d-block"><strong>Category:</strong>   {product.category}{" "}</span>
                       
                      
                    

                          
                        </p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button 
                          className="btn btn-link px-2"
                           
      
                          onClick={() => {
                            if (product.quantity > 1) {
                              dispatch(decrementQuantity(product));
                            } else {
                              alert("Quantity cannot be less than 1.");
                            }
                          }}
                        >
                          <i className="fas fa-minus"></i>
                        </button>

                        <input
                          id="form1"
                          min="1"
                          name="quantity"
                          value={product.quantity}
                          type="number"
                          className="form-control form-control-sm"
                          readOnly
                        />

                        <button
                          className="btn btn-link px-2"
                          onClick={() => dispatch(incrementQuantity(product))}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">${(product.price).toFixed(2)}</h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <button onClick={() => dispatch(deleteFromCart(product))} className="btn btn-danger">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
}
    {cart.length>0&& <h1>Subtotal ({item} items):${(totalPrice).toFixed(2)} </h1>}
          </div>
        </div>
      </div>
    </section>
  );
}
