import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
 

  
 

function App() {
 
   
  return (
    <div className="App">
      
        
       <Navbar></Navbar>
       <Outlet></Outlet>
       
    </div>
  );
}

export default App;
