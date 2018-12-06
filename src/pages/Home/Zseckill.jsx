import React, { Component } from 'react';
import "../../styles/homeSass/home.scss";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Swiper from 'swiper';

class Zseckill extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            dateTime:[],
            pids:[],
            btnIn:[],
            Zgoods:[]
            

        }
    }
    //时间请求
    getTimes() {
        React.axios.get('./jsons/times.json')
            .then((res) => {
                // console.log(res);
                var items = res.data.map((item,index)=>{
                    var pId =  item.pid;
                    // console.log(pId)
                    return pId
                })
                // console.log(items)
                // console.log(res.data);
                this.setState({
                    dateTime:res.data,
                    pids:items,
                })

            })
            .catch((err) => {
                console.log(err);
            })
          
    }
    //点击触发
    btnData(index){
        
        React.axios.get(`./jsons/home/${index}.json`)
        .then((res) => {
            // console.log(res.data.item_list);
          let btnIn =res.data.item_list;
            console.log(index);
           this.setState({
                btnIn:btnIn
           })


        })
        .catch((err) => {
            console.log(err);
        })

    }
    //商品请求
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
    componentDidMount() {
        this.getTimes();
        this.getZgoods();
        this.btnData(1);
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
        return (
            <div>
            <div className="z_secSome">
                <div className="z_seckill">
                    <div className="heaSeckill">
                        <h3>
                            限时秒杀
                            <span>包邮</span>
                        </h3>
                        <div className="secSome">更多秒杀</div>
                    </div>
                </div>
                <div className="z_secTime">
                    <div className=" zswiperTime">
                        <ul 
                        >
                           {
                               (()=>{
                                   return this.state.dateTime.map((item,index) => {
                                       return (
                                       <li key={index} onClick={this.btnData.bind(this,index)} className="">
                                           <span className="sec1">{item.tab_time}</span>
                                           <span className="sec2">{item.seckill_type}</span>

                                       </li>
                                       )
                                   })
                               })()
                           }
                           
                        </ul>
                    </div>
                </div>
            </div>

             <div className="secGoods">
             <div className="swiper-container seiperGoods">
                 <div className="swiper-wrapper Secwrapper">
                     {
                         (()=>{
                             return this.state.btnIn.map((item,index)=>{
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
               
                 <div className="swiper-pagination " id="secPage" />
             </div>
         </div>
         </div>
        )
    }
}

export default Zseckill;