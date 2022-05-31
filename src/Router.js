import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ItemCart from './pages/itemCart/ItemCart.js';
import ItemDetail from './pages/itemDetail/ItemDetail.js';
import ItemList from './pages/itemList/ItemList.js';
import Login from './pages/login/Login.js';
import Main from './pages/main/Main.js';
import SignUp from './pages/signUp/SignUp.js';
import Nav from './components/nav/Nav.js';
import Footer from './components/footer/Footer.js';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/itemcart" element={<ItemCart />} />
        <Route path="/itemdetail/:id" element={<ItemDetail />} />
        <Route path="/itemlist" element={<ItemList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
