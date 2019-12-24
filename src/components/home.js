import React from 'react'
import {Input, Row, Col} from 'antd'
import axios from 'axios'

//组件
import Forkgit from "../components/forkgit.js"
import DemoCard from "../components/democard"

const {Search} = Input;

export default class Home extends React.Component {
    handleSearch() {
      axios.get('search.json').then(res=>{alert(JSON.stringify(res.data.test))})
      //window.fetch('search.json').then(res=>res.text()).then(ress=>{alert(ress)})
      //let xmlreq= new XMLHttpRequest()
      //xmlreq.onreadystatechange=function() {console.log(JSON.parse(JSON.stringify(xmlreq.responseText)))}
      //xmlreq.open('get', 'search.json', false)
      //xmlreq.send(null)
    }
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
                <Search size="large" placeholder="搜一下，嗖一下" enterButton="嗖一下" onSearch={this.handleSearch}/>
              </Col>
            </Row>
          </div>
          <div className="homepage-content">
            <Row align="middle" justify="space-around" gutter={[24,16]}>
              <Col span={4}></Col>
              <Col span={4}>
                <DemoCard 
                  title="30erli"
                  description="学习博客，记录成长的点点滴滴。"
                  pathname="30erli"
                  state={{href:'https://30erli.cn',author:'Martin.Tong',datetime:'2018/12/01'}}
                />  
              </Col>
              <Col span={4}>
                <DemoCard
                  title='喔游记'
                  description="旅游分享交流，一起游才有趣。"
                  pathname="youji"
                  state={{href:'http://youji.30erli.cn',author:'Martin.Tong',datetime:'2019/03/20'}}
                />
              </Col>
              <Col span={4}>
                <DemoCard title='test' description="testtesttest" pathname="test" />
              </Col>
              <Col span={4}><p>demo4</p></Col>
              <Col span={4}></Col>
            </Row>
          </div>
        </div>
      )
    };
  }