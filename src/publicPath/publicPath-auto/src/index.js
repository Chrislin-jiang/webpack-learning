/*
 * @Author: Gongjianglin
 * @Date: 2022-03-18 11:13:53
 * @LastEditors: Gongjianglin
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'
import DragDemo from "./Pages/DragDemo";
// import LazyTestLin from "./Pages/LazyLoadGithub/LazyTestLin";
// import ReactLazyLoadTest from './Pages/lazyLoadTest/ReactLazyLoadTest';
// import LazyLoadExample from './Pages/LazyLoadGithub/Example';
// import ListViewTest from './Pages/mobile/ListViewTest/index';

ReactDOM.render(
  <React.StrictMode>
    <DragDemo />
    {/* <ListViewTest /> */}
    {/* <ReactLazyLoadTest /> */}
    {/* <LazyLoadExample /> */}
    {/* <LazyTestLin /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
