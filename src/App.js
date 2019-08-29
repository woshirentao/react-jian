import React from 'react';
import './index.css';  //这个css文件无论在哪个js文件中引入，都会影响全局样式，可以使用styled-components来解决
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={ store }>
      <Header />
    </Provider>
  );
}

export default App;
