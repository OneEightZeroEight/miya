import React , {Component} from 'react';
// import {Route} from 'react-router-dom';

// import { AppRegistry } from 'react-native';
// import Button from 'node_modules/antd-mobile-rn/lib/button';

//引入模块
import Hfooter from '../../components/Hfooter.jsx';
import Hsearch from '../Home/Hsearch.jsx';
import Zbanner from '../Home/Zbanner.jsx';
import Zseckill from '../Home/Zseckill.jsx'
// import ZsecGoods from '../Home/ZsecGoods.jsx';
import Zbady from '../Home/Zbaby.jsx';
import Zgroup from '../Home/Zgroup.jsx';
import Zrecom from '../Home/Zrecom.jsx';
// import Demo from '../Home/Zremonss';




import Zfooter from '../Home/Zfooter';









class Index extends Component{
    constructor(props){

        super(props);
        this.props = props;
        console.log(props);
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
                {/* <ZsecGoods></ZsecGoods> */}
                <Zbady></Zbady>
                <Zgroup></Zgroup>
                <Zrecom></Zrecom>
                {/* <Demo></Demo> */}


                <Zfooter></Zfooter>
                <Hfooter ss={this.state.history}></Hfooter>
            </div>
        );
    }
    componentWillMount(){
        this.aaa()
    }
}
export default Index;