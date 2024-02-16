import './App.css';
import React from 'react';
import{BrowserRouter,Outlet,Route,Routes} from "react-router-dom"
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import PageNotFound from './pages/pagenotfound';
import Blog from './pages/blog';
import BlogDetails from './pages/blogdetails';
import Navbar from './component/navbar';
import Dashboard from './pages/admin/dashboard';
import Login from './pages/auth/login';
import {navBarItems} from './component/navbaritems';
import {AuthWrapper} from './wrapper/authWrapper';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { useSelector } from 'react-redux';
// import { useEffect } from "react";



const routeItems = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetails />,
  },
];
const adminDashboard = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
const App=()=> {
  // const path = useLocation().pathname;
  // const authCtx = useSelector((state) => state.authReducer);
  // const { isLoggedIn } = authCtx;

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     if (path === "/login") {
  //       window.location.href = "/admin/dashboard";
  //     }
  //   }
  // }, [path]);
  return (
 <>
 <Provider store={store}>
 <BrowserRouter>
 <Navbar items={navBarItems}/>
 <Routes>

{/* function getCheese(){
  setTimeout(()=>{
  const cheese="cheese";
  console.log("I GET A LOT OF ",cheese)
    return cheese
},2000)

function makeDough(cheese){
  setTimeout(()=>{
  const dough="dough and" + cheese;
  console.log("I make ",dough)
    return dough
},2000)

function pizzaReady(doughandcheese){
  setTimeout(()=>{
  const pizza="its is ready" + doughandcheese;
  console.log(pizza)
    return pizza
},2000)

const cheese=getCheese();
const dough=makeDough();
pizzaReady(); */}

 {routeItems.map((route, index) => (
  <>
    <Route key={route.id} path={route.path} element={route.element} />
    </>
))}
 {/* {routeItems.map((route) => (
              <>
                <Route path={route.path} element={route.element} />
              </>
            ))} */}

  {/* <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/gallery' element={<Gallery/>}/>
  <Route path='/blog' element={<Blog/>}/> */}
  {/* <Route path='/blog/:id' element={<BlogDetails/>}/> */}

  <Route path="/login" element={<Login />} />
  <Route path="/*" element={<PageNotFound/>}/>

  {adminDashboard.map((route) => (
    <Route element={<AuthWrapper><Outlet/></AuthWrapper>} >
      <Route path="/admin/dashboard" element={<Dashboard/>}/>
    </Route>
 ))}
 
 </Routes>
 </BrowserRouter>
 </Provider>
 </>
  );
}

export default App;
