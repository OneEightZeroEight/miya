import React , {Component} from 'react';
// import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Hfooter from '../../components/Hfooter.jsx';
// import Hsearch from '../Home/Hsearch.jsx';

import '../.././styles/car.scss'

import Axios from 'axios'

import {connect} from 'react-redux'

class Car extends Component{
    constructor(props){
        super(props);
        this.props = props;
        console.log(props)
        this.state = {
          goodList : [
            {
              name : '',
              price : 100,
              select : false,
              subtotal : 0,
              size : '',
              imgUrl : '', 
              count : 1
            },
            {
              name : '',
              price : 200,
              select : false,
              subtotal : 0,
              size : '',
              imgUrl : '', 
              count : 1
            }
          ],
          totalPrice : 0,
          allSelect : false,
          num : 0 
        }
        
    }
    add(idx){
      console.log(idx)
        console.log(this.state.goodList[idx].count)
        let count = this.state.goodList[idx].count + 1;
        let goodList = this.state.goodList
        goodList[idx].count = count
        this.setState({
          goodList : goodList
        })
        this.getTotalPrice()
        this.getSubtotal(idx)
        this.getNum()
        //cookie.save('')

      
      
    }
    reduce(idx){
      if(this.state.goodList[idx].count>1){
        let count = this.state.goodList[idx].count - 1;
        let goodList = this.state.goodList
        goodList[idx].count = count
          this.setState({
            goodList : goodList
          })
        this.getTotalPrice()
        this.getSubtotal(idx)
        this.getNum()

      }
    }

    selectAll(){
      let goodList = this.state.goodList
      if(this.state.allSelect === false){      
        goodList.forEach((item,idx)=>{
          item.select = true
        })
      }else{
        goodList.forEach((item,idx)=>{
          item.select = false
        })
      }
      let allSelect = !this.state.allSelect
      this.setState({
        allSelect : allSelect
      })   
      this.setState({
        goodList : goodList
      })
      this.getTotalPrice()
      this.getNum()

      
    }

    remove(){
      let goodList = this.state.goodList
      goodList.forEach((item,idx)=>{
        if(item.select===true){
          goodList.splice(idx,1)
        }
      })
      this.setState({
        goodList
      })
      this.getTotalPrice()
    }

    componentDidMount(){
      console.log(this.props)
      let goodList = this.state.goodList
      goodList.forEach((item,idx)=>{
        this.getSubtotal(idx)
      })
    }

    changeState(idx){
      
      let goodList = this.state.goodList
      
        goodList[idx].select = !goodList[idx].select
        this.setState({
          goodList : goodList
        })  
        this.getTotalPrice()
        this.getSubtotal(idx)
        this.getNum()
        goodList.forEach((item,idx)=>{
          console.log(item.select)
          if(item.select === false){
            this.setState({
              allSelect : false
            })
            return 
          }
          
          if(idx===goodList.length-1){
            //console.log(1)
            let allSelect = true
            this.state.allSelect = true
            this.setState({
              allSelect
            })
            console.log(this.state.allSelect)
          }
        })      
    }

    getSubtotal(idx){
      let goodList = this.state.goodList      
      goodList[idx].subtotal = Number(goodList[idx].price * goodList[idx].count)
      this.setState({
        goodList : goodList
      })
    }

    getTotalPrice(){
      var totalPrice = 0;
      let goodList = this.state.goodList
      console.log(totalPrice)
      goodList.forEach((item,idx)=>{
        if(item.select===true){
          totalPrice += Number(item.price * item.count)
        }
      })
      console.log(totalPrice)
      //this.state.totalPrice = totalPrice
      this.setState({
        totalPrice
      })
      console.log(this.state.totalPrice)  
    }

    getNum(){
      let goodList = this.state.goodList
      let num = 0
      goodList.forEach((item,idx)=>{
        if(item.select === true){
          num += item.count
        }
      })
      this.setState({
        num
      })
    }

    render(){
        return (
          <div className="car">
            <div className="container">
                <header>
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                  <span>购物车</span>
                  <i className="fa fa-home" aria-hidden="true"></i>
                </header>
                <ul>
                  <li>
                    <ul>
                      <li className="store">
                        
                        <span>蜜芽精选商家</span>
                      </li>

                      {
                        (()=>{
                          // console.log(this.state.goodList)
                          return this.state.goodList.map((item,idx)=>{
                            return (
                              <li className="goodList" key={idx}>
                                <input type="checkbox" className="select" 
                                onChange={this.changeState.bind(this,idx)} 
                                checked={item.select}
                                />
                                <img src="" alt=""/>
                                <ul className="count">
                                  <li className="price">
                                    <span className="Name"></span>
                                    <span className="size"></span>
                                    <span className="subtotal">￥{item.subtotal}</span>
                                    
                                  </li>
                                  <li>
                                    <button onClick={this.reduce.bind(this,idx)}>-</button>                          
                                    <input type="text" value={item.count}/>
                                    <button onClick={this.add.bind(this,idx)}>+</button>
                                  </li>
                                </ul>
                                <span className="unitPrice"></span>
                              </li>
                            )
                          })
                        })()
                          
                        
                      }
                      


                    </ul>
                    
                  </li>
                  <li className="del">
                    <i className="fa fa-trash" aria-hidden="true"></i><span onClick={this.remove.bind(this)}>删除选择商品</span>
                  </li>

                  
                </ul>
                
                <li>
                  <ul className="footer">
                    <li>
                      <input type="checkbox" onChange={this.selectAll.bind(this)} checked={this.state.allSelect}/> 全选 
                    </li>
                    <li className="total">
                      <span>总计：￥{this.state.totalPrice}</span><br/>
                      <span className="explain">不含运费和进口税</span>
                    </li>
                    <li><button>结算({this.state.num})</button></li>
                  </ul>
                </li>
                <Hfooter></Hfooter>
            </div>
          </div>
            
        );
    }
}

export default connect((state)=>{
  return state
},(dispatch)=>{
  return {
    getdetails() {
      dispatch({
          type: 'getdetails',
          aa: [],
      })
    }
  }
})(Car);