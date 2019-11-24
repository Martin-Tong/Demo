import React from 'react'
import {Input, Row, Col} from 'antd'
import {BrowserRouter as BR, route} from 'react-router-dom'
import '../App.css'

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
              <Input size="large" />
            </Col>
          </Row>
        </div>
        <div className="homepage-content">
          <Row align="middle" justify="space-around" gutter={[24,16]}>
            <Col span={4}></Col>
            <Col span={4}><p>demo1</p></Col>
            <Col span={4}><p>demo2</p></Col>
            <Col span={4}><p>demo3</p></Col>
            <Col span={4}><p>demo4</p></Col>
            <Col span={4}></Col>
          </Row>
        </div>
      </div>
    )
  };
}
