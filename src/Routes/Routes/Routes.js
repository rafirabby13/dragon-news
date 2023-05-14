import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main.js";
import Home from "../../Pages/Home/Home/Home.js";
import Categories from "../../Pages/Categories/Category/Categories.js";
import News from "../../Pages/News/News/News.js";
import Login from "../../Pages/Login/Login/Login.js";
import Register from "../../Pages/Login/Register/Register.js";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import TermsAndCondions from "../../Pages/Others/TermsAndConditions/TermsAndCondions.js";

export const routes = createBrowserRouter([
   {
    path:'/',
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=>fetch('http://localhost:5000/news')
        },
        {
            path:'/category/:id',
            element: <Categories></Categories>,
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path:'/news/:id',
            element: <PrivateRoute><News></News></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path: '/terms',
            element:<TermsAndCondions></TermsAndCondions>
        }
    ]
   }

])