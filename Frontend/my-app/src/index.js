import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Home } from "./components/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Cart } from "./components/Cart";
import { Product } from "./components/product";
import {Provider} from 'react-redux';
import { store } from './redux/store';
import { Login } from './components/Login';

const router=createBrowserRouter([
  {path:'/',element:<App></App>,children:[
  {path:'/Product',element:<Product></Product>},
  {path:'/Cart',element:<Cart></Cart>},
  {path:'/Home',element:<Home></Home>},
  {path:'/Login',element: <Login></Login>},
  ]}
]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
