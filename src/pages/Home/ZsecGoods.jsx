import React, { Component } from 'react';
// import "../../styles/zfbui.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Swiper from 'swiper';

class ZsecGoods extends Component {
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
        console.log(this.props)
      this.getZgoods();
      var myswiper = new Swiper('.seiperGoods', {
        observer: true,
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
    render() {
        console.log(this.state)
        return(

            <div className="secGoods">
                <div className="swiper-container seiperGoods">
                    <div className="swiper-wrapper Secwrapper">
                        {
                            (()=>{
                                return this.state.Zgoods.map((item,index)=>{
                                    return (
                                        <div className="swiper-slide Secslide"  key={index}>
                                            <div className="secPic">
                                                <img src={item.pic} alt="Zrecom" className="secImg"/>
                                            </div>
                                            <p className="secTitle">{item.title}</p>
                                            <p className="secPrice" > ￥{item.active_price}</p>
                                        </div>

                                    )
                                })
                            })()
                        }
                    </div>
                    {/* Add Pagination */}
                    <div className="swiper-pagination " id="secPage" />
                </div>
            </div>
        )
    }
}
export default connect((state)=>{
    console.log(state)
    return state
})(ZsecGoods);