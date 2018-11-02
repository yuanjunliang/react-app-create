import React,{PureComponent} from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import JLMain from '../containers/JLMain'
import JLHome from '../containers/Home/JLHome'
import JLProduct from '../containers/Product/JLProduct'
import JLBusiness from '../containers/Business/JLBusiness'

export default class JLRouter extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={JLMain}>
                    <IndexRoute component={JLHome}/>
                    <Route path="product" component={JLProduct}/>
                    <Route path="business" component={JLBusiness}/>
                </Route>
            </Router>
        )
    }
}