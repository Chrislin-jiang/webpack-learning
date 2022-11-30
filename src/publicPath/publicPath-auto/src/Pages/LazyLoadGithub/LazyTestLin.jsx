/*
 * @Author: Gongjianglin
 * @Date: 2022-03-31 09:49:40
 * @LastEditors: Gongjianglin
 * @Description:
 */
import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import imgList from "./imgList";
import "./lazyTestLin.css";

export default class LazyTestLin extends Component {
  render() {
    return (
      <div className="lazy-test-lin">
        {/* {imgList.map((img) => (
          <img src={img} alt="img" />
        ))} */}
        {imgList.map((img) => (
          <LazyLoad throttle={100} height={100} once>
            <img src={img} alt="img" />
          </LazyLoad>
        ))}
      </div>
    );
  }
}
