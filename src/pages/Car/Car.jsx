import React , {Component} from 'react';
// import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Hfooter from '../../components/Hfooter.jsx';
// import Hsearch from '../Home/Hsearch.jsx';

import '../.././styles/car.scss'

import Axios from 'axios'

import qs from 'qs'

class Car extends Component{
    constructor(props){
        super(props);
        this.props = props;
        //console.log(props)
        this.state = {
          goodList : [
            // {
            //   name : '',
            //   price : 100,
            //   select : false,
            //   subtotal : 0,
            //   size : '',
            //   imgUrl : '', 
            //   count : 1
            // },
            // {
            //   name : '',
            //   price : 200,
            //   select : false,
            //   subtotal : 0,
            //   size : '',
            //   imgUrl : '', 
            //   count : 1
            // }
          ],
          us : '',
          totalPrice : 0,
          allSelect : false,
          num : 0 
        }
        
    }
    add(idx){
      console.log(idx)
        console.log(this.state.goodList[idx].count)
        let count = Number(this.state.goodList[idx].count) + 1;
        let goodList = this.state.goodList
        goodList[idx].count = count
        console.log(count)
        var carId = goodList[idx].carId

        Axios.post('http://127.0.0.1:4444/api/car',qs.stringify({
          method : 'update',
          carId,
          count,
          us : this.state.us
        }))
        .then(res=>{
          console.log(res)
        })
        .catch(err=>{
          console.log(err)
        })

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
        let count = Number(this.state.goodList[idx].count) - 1;
        let goodList = this.state.goodList
        goodList[idx].count = count
        var carId = goodList[idx].carId
        Axios.post('http://127.0.0.1:4444/api/car',qs.stringify({
          method : 'update',
          carId,
          count,
          us : this.state.us
        }))
        .then(res=>{
          console.log(res)
        })
        .catch(err=>{
          console.log(err)
        })

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
      // goodList.forEach((item,idx)=>{
      //   if(item.select===true){
      //     goodList.splice(idx,1)
      //   }
      //   console.log(goodList.length)

      // })
      var carArr = []
      for(var i=0;i<goodList.length;i++){
        console.log(goodList[i].select)

        if(goodList[i].select===true){
          carArr.push(goodList[i].carId)
          goodList.splice(i,1)
          i--
        }
      }

      console.log(carArr)
      Axios.post('http://127.0.0.1:4444/api/car',qs.stringify({
        method : 'del',
        carArr : JSON.stringify(carArr),
        us : this.state.us
      }))
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })

      this.setState({
        goodList
      })
      this.getTotalPrice()
    }

    componentDidMount(){
      console.log(this.props)
      if(this.props.us){
        this.setState({
          us : this.props.us
        })
        Axios.post('http://127.0.0.1:4444/api/car',qs.stringify({
          us : this.props.us,
          method : 'find'
        }))
        .then(data=>{
          console.log(data.data.data)
          console.log(data.data.countArr)
          console.log(data.data.carIdArr)
          data.data.data.forEach((item,idx)=>{
            item.count = data.data.countArr[idx]
            item.carId = data.data.carIdArr[idx]
            item.select = false
            item.subtotal = 0
          })
          this.setState({
            goodList : data.data.data
          })
          console.log(this.state.goodList)
        })
        .catch(err=>{
          console.log(err)
        })
      }
      
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
          //console.log(item.count)
          num = Number(item.count)+num
        }
      })
      this.setState({
        num
      })
    }

    goEntry(){
      this.props.history.push('/my')
    }
    goHome(){
      this.props.history.push('/home')
    }

    render(){
        return (
          <div className="car">
            <header>
              <i className="fa fa-angle-left" aria-hidden="true" onClick={this.goHome.bind(this)}></i>
              <span>购物车</span>
              <i className="fa fa-home" aria-hidden="true"  onClick={this.goHome.bind(this)}></i>
            </header>
            {(()=>{
              console.log(this.state.goodList.length)
              if(this.state.us&&this.state.goodList.length!=0){
                
                return  <div>
                <div className="container">
                    
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
                                    <img src={item.imgUrl} alt=""/>
                                    <ul className="count">
                                      <li className="price">
                                        <span className="Name">{item.name}</span>
                                        <span className="size">{item.size}</span>
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
                        <li><button>结算({Number(this.state.num)})</button></li>
                      </ul>
                    </li>
                    
                </div>
              </div>
              }else if(!this.state.us){
                return <div className="entry" onClick={
                  //console.log(11111)
                  this.goEntry.bind(this)
                  
                  }>
                
                跳转登录界面</div>
              }else{
                return <div className="entry" onClick=
                {
                  this.goHome.bind(this)
                  
                }
                >快去选购商品吧</div>
              }
            })()}
            <Hfooter></Hfooter>
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