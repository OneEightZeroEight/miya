import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom'
// import Hfooter from '../../components/Hfooter.jsx';
// import ListHeader from './ListHeader.jsx';
import '../../styles/Lists.scss';
import { Spin, BackTop } from 'antd'; //引入 ant 
class Lists extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(props);
        this.state = {
            licur:0,
            contentClass: "screen_nav",
            detail: [],
            detailitem:[],
            loading: true,
            loadingmore : true,
            lititle :[
                {name:"人气"},
                {name:"销量"},
                {name:"新品"},
                {name:"价格"},
            ]
        }
    }
    toggleLicur(index,e) {
        this.setState((prevState) => ({
            licur: index,
        }))
        if(this.state.licur===3){
            let newdetail = this.state.detail;
            let newarr = newdetail.sort((function (o1, o2) {
                return o1.real_price - o2.real_price;
              }))
            // let newarr = newdetail.reverse();倒序brand_id
            console.log(newarr)
        }
        if(this.state.licur===1){
            let newdetail = this.state.detail;
            let newarr = newdetail.sort((function (o1, o2) {
                return o1.brand_id - o2.brand_id;
              }))
            // let newarr = newdetail.reverse();倒序
            console.log(newarr)
        }
        if(this.state.licur===2){
            let newdetail = this.state.detail;
            let newarr = newdetail.sort((function (o1, o2) {
                return o1.comm_rate - o2.comm_rate;
              }))
            // let newarr = newdetail.reverse();倒序
            console.log(newarr)
        }
    }
    windowOnScroll() {
        if(this.state.loadingmore===true){
            window.onscroll = () =>{
                //获取滚动条滚动的距离
                let h = document.documentElement.scrollTop;
                //滚动条的总距离
                let all = document.documentElement.scrollHeight;
                // console.log(h,all);
                if (all-h===667) {
                React.axios.get('../jsons/Lists.json')
                    .then((res) => {
                        // console.log(res.data)
                        let arr3 = res.data.pagetwo;
                        let arr4 = this.state.detail.concat(arr3);
                        console.log(arr4);
                        this.setState((prevState) => ({
                            detail: arr4,
                        }))
                        return this.state;
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                } 
                if (h>50) {
                    // console.log(666)
                    this.setState({
                        contentClass: "fixeds"
                    });
                } else {
                    this.setState({
                        contentClass: "screen_nav",
                        loadingmore : false
                    });
                }
            }
        }
        
    }
    getdetail() {
        React.axios.get('../jsons/Lists.json')
            .then((res) => {
                // console.log(res.data)
                let arr = res.data.pageone;
                let arr2 = this.state.detail.concat(arr);
                this.setState((prevState) => ({
                    detail: arr2,
                    loading: false
                }))

                // return this.state;
                
            })
            .catch((err) => {
                console.log(err)
            })
    }
    getId(index,e){
        console.log(index);
        let items = this.state.detail[index]
        console.log(items);
        this.setState((prevState) => ({
            detailitem: items
        }))

    }
    componentDidMount() {
        this.getdetail();
    }
    componentDidUpdate(){
        this.windowOnScroll();
    }
    componentWillReceiveProps(){
        console.log(this.props)
    }
    render() {
        console.log(this.state.detailitem)
        console.log(this.props)
        return (
            <div style={{ display: this.props.showlist.isShowlists ? "block" : "none" }}>
                <nav className={this.state.contentClass}>
                    <ul>
                        {
                            (()=>{
                                return this.state.lititle.map((item,index)=>{
                                    return <li key={index} className={index===this.state.licur?"active":'rq'}
                                    onClick={this.toggleLicur.bind(this,index)}
                                 >{item.name}</li>
                                })
                            })()
                        }
                        
                        
                    </ul>
                    {/* <div className="mask"></div> */}
                </nav>
                <div className="proList" id="listItems">
                    {
                        (() => {
                            return this.state.detail.map((item, index) => {
                                return <Link  to='/detail/'  replace className="defaultBlock" id={item.id} data-sku={item.id}  key={index}
                                  alt='' 
                                //   onClick={this.getId.bind(this,index)}
                                    onClick={this.props.getdetails.bind(this, index)}
                                >
                                    <a href="/list/listdetail" title="miya" alt='' >
                                        <div className="entranceMap">
                                            <img src={item.image}
                                                alt="" />
                                        </div>
                                        <div className="rim">
                                            <div className="mainTitle">
                                                {item.brand_name} {item.name} </div>
                                            <div className="price">
                                                <div className="price_desc"><span>{item.activity_dynamics}</span>
                                                    <div className="gsh-mark">自营</div>
                                                </div>
                                                <div className="mia_price">
                                                    <span className="mia_price_title"></span><span className="price_icon">¥</span><span className="mia_price_con">{item.real_price}</span>
                                                </div>
                                                <div className="market_price">
                                                    <span className="market_price_title"></span><span className="price_icon">¥</span><del className="market_price_con">{item.market_price}</del>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="1" className="Fbutton btn-cart addShoppingCart"><span></span></a>
                                </Link>
                            })
                        })()
                    }


                </div>

                

                <div>
                    <BackTop />
                    {/* <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong> */}
                
                </div>

                <div className='example'>
                    <Spin tip="Loading..." spinning={this.state.loading} />
                </div>

            </div>
        )
    }
}
export default connect((state) => {
    console.log(state)
    return state
}, (dispatch) => {
    return {
        getdetails(index) {
            console.log(index);
            dispatch({
                type: 'getdetails',
                aa:this.state.detail[index]
                
            })
        }
    }
})(Lists);