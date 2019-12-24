import React from 'react'
import {Card} from 'antd'
import {Link} from 'react-router-dom'

const {Meta} = Card

export default function DemoCard(props) {
    let location = {
        pathname:props.pathname,
        search: props.search,
        hash: props.hash,
        state: props.state
    }
    return (
        <Card hoverable extra={<Link to={location}>More</Link>}>
            <Meta title={props.title} description={props.description} />
        </Card>
    )
}