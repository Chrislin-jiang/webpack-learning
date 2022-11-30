/*
 * @Author: Gongjianglin
 * @Date: 2022-03-18 14:54:51
 * @LastEditors: Gongjianglin
 * @Description: 
 */
import React from 'react';
import { Tabs } from 'antd';
import './index.css'
import BasicFunction from './BasicFunction';
import BasicClass from './BasicClass';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Drag = () => (
  <div className='drag-wrapper'>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="BasicFunction" key="1">
        <BasicFunction />
      </TabPane>
      <TabPane tab="BasicClass" key="2">
        <BasicClass />
      </TabPane>
    </Tabs>
  </div>
);
export default Drag