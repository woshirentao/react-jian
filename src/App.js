import React from 'react';
// import './index.css';  //这种方式弊端：无论在哪个js文件中引入这个css文件，都会影响全局样式，可以使用styled-components来解决
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Detail from './pages/detail/loadable'
import write from './pages/write';

function App() {
  return (
    <Provider store={ store }>
      {/* 路由 */}
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/write" exact component={write}></Route>
        {/* 路由传值（跟vue一样）：
          1、:id  通过this.props.match.params获取
          2、query形式：通过this.props.location.search解析获取
        */}
        <Route path="/detail/:id" exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
