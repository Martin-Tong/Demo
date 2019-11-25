import React from 'react'
import {Input, Row, Col} from 'antd'
import {BrowserRouter as BR, route} from 'react-router-dom'
import '../App.css'

//components
import Forkgit from "../components/forkgit.js"
import DemoCard from "../components/democard"

const {Search} = Input;

export default function Entry() {
    return (
        <BR>
            <Home />
        </BR>
    )
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <Forkgit />
        <div className="homepage-header">
          <Row type="flex" align="middle">
            <Col span={8} offset={8}>
              <p className='homepage-header-title'>DEMOS
                <span>--30erli.cn</span>
              </p>
            </Col>
          </Row>
          <Row type="flex">
            <Col span={16} offset={4}>
              <Search size="large" placeholder="搜一下，嗖一下" enterButton="嗖一下" />
            </Col>
          </Row>
        </div>
        <div className="homepage-content">
          <Row align="middle" justify="space-around" gutter={[24,16]}>
            <Col span={4}></Col>
            <Col span={4}>
              <DemoCard title="30erli" description="学习博客，记录成长的点点滴滴。" href="https://30erli.cn"/>  
            </Col>
            <Col span={4}>
              <DemoCard title='喔游记' description="旅游分享交流，一起游才有趣。" />
            </Col>
            <Col span={4}><p>demo3</p></Col>
            <Col span={4}><p>demo4</p></Col>
            <Col span={4}></Col>
          </Row>
        </div>
      </div>
    )
  };
}
