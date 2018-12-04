import React , {Component} from 'react';
// import {Route} from 'react-router-dom';

// import { AppRegistry } from 'react-native';
// import Button from 'node_modules/antd-mobile-rn/lib/button';


import Hfooter from '../../components/Hfooter.jsx';
import Hsearch from '../Home/Hsearch.jsx';
import Zbanner from '../Home/Zbanner.jsx';
import Zseckill from '../Home/Zseckill.jsx'
import ZsecGoods from '../Home/ZsecGoods.jsx'


class Index extends Component{
    constructor(props){

        super(props);
        this.props = props;
        // console.log(props);
        this.state = {
            history:""
        }
    }
    aaa(){
        this.setState({
            history:this.props.history
        })
    }

    render(){
        return (
            <div >
                {/* 这是Home */}
                <Hsearch></Hsearch>
                <Zbanner></Zbanner>
                <Zseckill></Zseckill>
                <ZsecGoods></ZsecGoods>
                <Hfooter ss={this.state.history}></Hfooter>
            </div>
        );
    }
    componentWillMount(){
        this.aaa()
    }
}
export default Index;