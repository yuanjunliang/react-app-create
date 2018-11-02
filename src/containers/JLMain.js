import React,{PureComponent} from 'react'
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router'
import './style.css'
const { Header, Sider, Content } = Layout;

export default class JLMain extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
            selected:'home'
        }
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }

    menuItemClick(menuItem){
        console.log({menuItem})
    }

    render(){
        return(
            <Layout>
                <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="home"><Link className="colorWhite" to="/"><Icon type="user" /><span>仪表盘</span></Link></Menu.Item>
                    <Menu.Item key="product"><Link className="colorWhite" to="/product"><Icon type="video-camera" /><span>产品</span></Link></Menu.Item>
                    <Menu.Item key="business"><Link className="colorWhite" to="/business"><Icon type="upload" /><span>商城</span></Link></Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                    className="trigger marginLeft"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                    />
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 980 }}>
                    {this.props.children}
                </Content>
                </Layout>
            </Layout>
        )
    }
}