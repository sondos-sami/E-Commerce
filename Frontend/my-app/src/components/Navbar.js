import { Link } from "react-router-dom";
export function Navbar(){
    return<>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <Link className="navbar-brand" to={'/Home'}>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to={'/Product'}>Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Login'}>Log in<i class="fas fa-user"></i></Link>
        </li>
        <li>
        <Link className="nav-link active "   aria-current="page" to={'/Cart'}>Cart <i class="fa-solid fa-cart-shopping fa-xl"></i></Link>
        
     
        </li>
         
      </ul>
      
           
    </div>
  </div>
</nav>
    </>
}