/*
 * @Author: Gongjianglin
 * @Date: 2022-03-18 15:54:59
 * @LastEditors: Gongjianglin
 * @Description: 
 */
import React, { Component } from "react";
import { ReactSortable } from "react-sortablejs";

export default class BasicClass extends Component {
  state = {
    list: [{ id: "1", name: "shrek" },
    { id: "2", name: "shrek2" },
    { id: "3", name: "shrek3" }
    ],
  };
  helper = (params) => {
    console.log(params);
  }
  setList = (newState) => {
    console.log("gjl-newState", newState);
    this.setState({ list: newState })
  }
  render() {
    return (
      <ReactSortable
        list={this.state.list}
        // setList={(newState) => this.setState({ list: newState })}
        setList={(newState) => this.setList(newState)}
        // onMove={(move) => this.helper(move)}
        // onChange={(change) => this.helper(change)}
      >
        {this.state.list.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </ReactSortable>
    );
  }
}