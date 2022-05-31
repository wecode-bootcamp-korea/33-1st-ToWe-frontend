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
import Best10 from './pages/best10/Best10.js';
import Board from './pages/board/Board.js';
import Order from './pages/order/Order.js';
import MyPage from './pages/myPage/MyPage.js';

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
        <Route path="/best10" element={<Best10 />} />
        <Route path="/board" element={<Board />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
