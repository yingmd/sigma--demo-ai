import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Category from './pages/Category';
import Notifications from './pages/Notifications';
import Orders from './pages/Orders';
import EditProfile from './pages/EditProfile';
import Settings from './pages/Settings';
import Favorites from './pages/Favorites';
import History from './pages/History';
import QuickOrders from './pages/QuickOrders';
import Following from './pages/Following';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/history" element={<History />} />
        <Route path="/quick-orders" element={<QuickOrders />} />
        <Route path="/following" element={<Following />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
