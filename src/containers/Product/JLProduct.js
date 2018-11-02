import React,{PureComponent} from 'react'
import './style.css'
import {Button} from 'antd'

export default class JLProduct extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="header paddingLeft">
                    <Button >添加分类</Button>
                </div>
                <div className="content marginTop"></div>
            </div>
        )
    }
}