import React from 'react'
import {Card} from 'antd'
import { OmitProps } from 'antd/lib/transfer/renderListBody'

const {Meta} = Card

export default function DemoCard(props) {
    return (
        <Card hoverable extra={<a href={props.href}>{props.title}</a>}>
            <Meta title={props.title} description={props.description} />
        </Card>
    )
}