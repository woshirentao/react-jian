import React from 'react';
// import './index.css';  //这种方式弊端：无论在哪个js文件中引入这个css文件，都会影响全局样式，可以使用styled-components来解决
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={ store }>
      <Header />
      {/* 路由 */}
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
