import React from 'react'
import {useParams, useLocation} from "react-router-dom"
import {PageHeader, Descriptions} from 'antd'

const {Item} = Descriptions;

export default function DemoPage(props) {
    let params = useParams();
    let location = useLocation()
    return (
        <div className="demopage">
            <div style={{height:'15%'}}>
                <PageHeader ghost={true} title={params.project} onBack={()=>{window.history.back()}}>
                    <Descriptions>
                        <Item label="author">{location.state.author}</Item>
                        <Item label="datetime">{location.state.datetime}</Item>
                        <Item label='original'><a href={location.state.href}>{params.project}</a></Item>
                    </Descriptions>
                </PageHeader>
            </div>
            <div style={{height:"85%",width:'90%',margin:'0 auto',border:'1px solid lightgray',borderRadius:8}}>
                <iframe title={params.project} width="100%"  height="100%" frameBorder="0" src={location.state.href} seamless>
                    您的浏览器不支持内嵌框架！
                </iframe>
            </div>
        </div>
    )
}