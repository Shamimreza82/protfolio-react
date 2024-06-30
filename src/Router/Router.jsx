import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout></MainLayout>, 
        children: [
            {
               path: '/', 
               element: <Home></Home>, 
            },
            {
               path: '/about', 
               element: <About></About>
            },
            {
               path: '/projects', 
               element: <Projects></Projects>
            },
            {
               path: '/contact', 
               element: <Contact></Contact>
            }, 
            {
               path: "/blog", 
               element: <Blog></Blog>
            },
            {
               path: "/login", 
               element: <Login></Login>
            },
            {
               path: "/register", 
               element: <Register></Register>
            }
        ]
    }
])

export default router; 