import React , {Component} from 'react';
// import {Route} from 'react-router-dom';

import Hfooter from '../../components/Hfooter.jsx';
// import Hsearch from '../Home/Hsearch.jsx';
class User extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return (

            <div className="user">
              <header>
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
                  <span>个人中心</span>
                  <i class="fa fa-home" aria-hidden="true"></i>
              </header>
              <div className="res">
                <img src="" alt=""/>
                <div>
                  <span className="name"></span><br/>
                  <span className="level"></span><span className="val"></span><br/>
                </div>
              </div>
              <div className="tubiao">
                <div><i class="fa fa-bars" aria-hidden="true"></i><br/>全部订单</div>
                <div><i class="fa fa-archive" aria-hidden="true"></i><br/>代付款</div>
                <div><i class="fa fa-car" aria-hidden="true"></i><br/>代发货</div>
                <div><i class="fa fa-gift" aria-hidden="true"></i><br/>待收货</div>
                <div><i class="fa fa-book" aria-hidden="true"></i><br/>待评价</div>
              </div>
              <Hfooter></Hfooter>
            </div>
            
        );
    }
}
export default User;