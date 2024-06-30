import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup';
import SingleBlogDetails from './components/SingleBlogDetails';
import { blogPost } from './pages/Blog';
import Account from './pages/Account';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
import { products } from './pages/Home';

function App() {
  return (
    <Router>
    <Nav />  {/* Include Nav outside Routes for global presence */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/Blog/:slug" element={<SingleBlogDetails key={blogPost.slug} post={blogPost} />} />      
      <Route path="/Blog/:slug" element={<SingleBlogDetails key={blogPost.slug} post={blogPost} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/account" element={<Account />} />
      <Route path="/wishlist" element={<WishList  />} />
      <Route path="/cart" element={<Cart products={products} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
     
    </Routes>
    <Footer /> 
  </Router>
  );
}

export default App;
