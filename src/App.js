import './App.css';
import{BrowserRouter,Route,Routes} from "react-router-dom"
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
const App=()=> {
  return (
 <>
 <BrowserRouter>
 <Navbar items={navBarItems}/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/gallery' element={<Gallery/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/blog/:id' element={<BlogDetails/>}/>
  <Route path='/admin/dashboard' element={<Dashboard/>}/>
  <Route path="/login" element={<Login />} />
  <Route path='/*' element={<PageNotFound/>}/>
 </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
