import React , {Component} from 'react';
// import {Route} from 'react-router-dom';

import Hfooter from '../../components/Hfooter.jsx';
// import Hsearch from '../Home/Hsearch.jsx';

import '../.././styles/my.scss'

// import Axios from 'axios'

import cookie from 'react-cookies'

import qs from 'qs'

import { connect } from 'react-redux';

class User extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
          status : 'entry',
          us : '',
          code : '',
          msg : {}
        }
    }
    changeUs(e){
      this.state.us = e.target.value
    }
    changeCode(e){
      this.state.ps = e.target.value
    }
    sendCode(){
      // let d = new Date()
      // d = d.getTime()
      // let randomNum = Math.floor(Math.random()*9000+1000)
      // Axios.get('https://open.ucpaas.com/ol/sms/sendsms',{
      //   sid : '1053d0996c825b3c50f04e73d8cd3ab9',
      //   token : '205a3fee04cdb6c18176',
      //   appid : '10e938b99ffd44c38f5ca923adb718c8',
      //   templateid : 
      //   '406029',
      //   mobile : '15770745648' 
      // })
      // .then(res=>{
      //   console.log(res)
      // })
      // .catch(err=>{
      //   console.log(err)
      // })

      Axios.post('http://127.0.0.1:4444/api/register')
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    entry(){
      console.log(this.state.us)
      if(/^1[345678]\d{9}/.test(this.state.us)){
        
        // if(!cookie.load('us',this.state.us)){
          
        //   cookie.save('us',{name:this.state.us,level:'小蜜蜂',val:0,coupon:0})
        // }
        Axios.post('http://127.0.0.1:4444/api/register',qs.stringify({
          us : this.state.us
        }))
        .then(res=>{
          console.log(res)
          this.setState({
            status : 'user'
          })
          this.props.getUs(this.state.us)
        })
      .catch(err=>{
        console.log(err)
      })
      
      }else{

      }      
    }
    
    back(){
      cookie.remove('us')
      this.setState({
        status : 'entry'
      })
      
    }

    backHome(){
      this.props.history.push('/home')
    }

    goBack(){
      
      this.props.history.push('/home')
    }


    componentDidMount(){
      if(cookie.load('us')){
        this.setState({
          status : 'user',
          msg : cookie.load('us')
        })
      }
    }  
    render(){
        return (
          <div>
            {
              (()=>{
                if(this.state.status === 'user'){
                  return <div className="user">
                  <header>
                      <i className="fa fa-angle-left" aria-hidden="true" onClick={this.goBack.bind(this)}></i>
                      <span>个人中心</span>
                      <i className="fa fa-home" aria-hidden="true" onClick={this.backHome.bind(this)}></i>
                  </header>
                  <div className="res">
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    <div>
                      <span className="name">{this.state.msg.name}</span><br/>
                      <span className="level">等级：{this.state.msg.level}</span><br/><span className="val">蜜粉值：</span><br/>
                    </div>
                  </div>
                  <div className="icon">
                    <div><i className="fa fa-bars" aria-hidden="true"></i><br/>全部订单</div>
                    <div><i className="fa fa-archive" aria-hidden="true"></i><br/>待付款</div>
                    <div><i className="fa fa-car" aria-hidden="true"></i><br/>待发货</div>
                    <div><i className="fa fa-gift" aria-hidden="true"></i><br/>待收货</div>
                    <div><i className="fa fa-book" aria-hidden="true"></i><br/>待评价</div>
                  </div>
                  <ul className="coupon">
                    <li><p className="left"><i class="fa fa-credit-card" aria-hidden="true"></i><span>优惠券</span></p><p className="right"><span>0张未使用</span><i class="fa fa-angle-right" aria-hidden="true"></i></p></li>
                    <li><p className="left"><i class="fa fa-shopping-bag" aria-hidden="true"></i><span>实名认证</span></p><p className="right"><span>未认证</span><i class="fa fa-angle-right" aria-hidden="true"></i></p></li>
                    <li><p className="left"><i class="fa fa-mobile" aria-hidden="true"></i><span>联系客服</span></p><p className="right"><span className="phone">10108088</span><i class="fa fa-angle-right" aria-hidden="true"></i></p></li>
                  </ul>
    
                  <div className="back" onClick={this.back.bind(this)}>退出登录</div>
    
                  <Hfooter></Hfooter>
                </div>
                }else{
                  return <div className="entry">
                    <header>
                      <i class="fa fa-angle-left" aria-hidden="true" onClick={this.goBack.bind(this)}></i>
                      <span>快捷登录</span>
                      <i class="fa fa-home" aria-hidden="true" onClick={this.backHome.bind(this)}></i>
                    </header>
                    <form action="">
                      <input type="text" placeholder="请输入手机号码" className="number" onChange={this.changeUs.bind(this)}/>
                      <input type="text" placeholder="短信验证码" onChange={this.changeCode.bind(this)}/>
                      <button onClick={this.sendCode.bind(this)}>收取验证码</button>
                    </form>

                    <div className="entryBtn" onClick={this.entry.bind(this)}>一键登录</div>
                    <p>
                      <span>用户注册即代表同意 </span> <u> 蜜芽服务条款</u>
                    </p>
                    <div className="other">
                      <div className="bar"></div>
                      <div>其他登录方式</div>
                      <div className="bar"></div>
                    </div>
                    <div className="icon">
                    <i className="fa fa-weixin" aria-hidden="true"></i>
                    <i className="fa fa-weibo" aria-hidden="true"></i>
                    </div>
                  </div>
                }
              })()
            }
          </div>           
        );
    }
}
export default connect(state=>{
  return state
},dispatch=>{
  return {
    getUs(us){
      dispatch({
        type : 'setUs',
        us
      })
    }
  }
})(User);