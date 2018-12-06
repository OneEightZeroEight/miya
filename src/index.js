import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Toast} from 'antd-mobile'
//路由
import { HashRouter as Router } from 'react-router-dom';
//状态管理 配置store的
import { createStore } from 'redux';
//把上面配置好的store 和 react 进行关联
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';// 引入 ant-design 样式 
import './styles/index.css';
import './styles/base.css';
import './styles/List.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
React.axios = axios;

// 它是状态管理的配置参数，函数第一个参数为state，就是存储组件需要通信和交换的数据
// 第二个参数是action，它是触发，他需要其他组件传递一个信号，

// state交换数据的仓库
// action交换数据的动作
axios.interceptors.request.use((config) => {
    Toast.loading('', 3,true);
      return config;
    }, (err) => {
      return Promise.reject(err)
  
})
axios.interceptors.response.use((response) => {
	Toast.hide(); //关闭loading
	return response;
    }, (err) => {
	return Promise.reject(err);

})
const store = createStore((state = {
    title: 'miya',
    showlist :{
        isShowlists: false,
        isShowlist : true,

    },
    aa:[]
    
}, action) => {
    switch (action.type) {
        case 'toggleList':
            return {
                ...state,
                showlist : action.showlist
            }; 
        case 'getdetails':
            return {
                ...state,
                aa : action.aa
            };
        case 'toggleLoding':
            return state;
        case 'add3':
            return state;
        default:
            return state;
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
