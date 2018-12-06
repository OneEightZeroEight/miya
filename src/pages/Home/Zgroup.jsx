import React, { Component } from 'react';
import "../../styles/zfbui.css";
import "../../styles/homeSass/home.scss"

import Swiper from 'swiper';

class Zgroup extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            Zgoods:[]
        }
    }
    getZgoods(){
        React.axios.get('./jsons/seckillGoods.json')
            .then((res) => {
            //    console.log(res.data.item_list);
               this.setState({
                    Zgoods:res.data.item_list
               })
    
            })
            .catch((err) => {
                console.log(err);
            })
    }
    ZsecLun(){
       
     }

    componentDidMount() {
      this.getZgoods();
      var myswiper = new Swiper('.seiperGrouup', {
        observer: true,
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 10,
      });
    }
    render() {
        return(
            <div className="secGoods">
                <div className="heaGroup">
                    <div className="heaLt">
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <span><b>蜜芽拼团</b></span>
                        <span className="bao"><b>包邮包税</b></span>
                    </div>
                    <p className="heaRt"><strong>130万</strong>达人妈妈都在团</p>      
                </div>
                <div className="swiper-container seiperGrouup" id="dingwei">
                    <div className="swiper-wrapper Secwrapper">
                        {
                            (()=>{
                                return this.state.Zgoods.map((item,index)=>{
                                    return (
                                        <div className="swiper-slide Secslide"  key={index} id="pgroup">
                                            <div className="secPic">
                                                <img src={item.pic} alt="Zrecom" className="secImg"/>
                                            </div>
                                            <p className="secTitle">{item.title}</p>
                                            <p className="secPrice" >拼团价 ￥<b>{item.active_price}</b></p>
                                            <p className="secMarket" >市场价 ￥<del>{item.market_price}</del></p>
                                            
                                        </div>
                                    )
                                })
                            })()
                        }
                        
                    </div>
                    <div className="bySome">
                        <p>查看更多
                            <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                        </p>
                    </div>
                    <div className="btn-more">
                        <span>更多火爆商品 进入拼团首页</span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i> 
                    </div>

                </div> 
                
            </div>
        )
    }
}
export default Zgroup;