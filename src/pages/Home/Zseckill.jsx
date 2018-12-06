import React, { Component } from 'react';
import "../../styles/homeSass/home.scss";

import Swiper from 'swiper';

class Zseckill extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            dateTime:[]
        }
    }
    getTimes() {
        React.axios.get('./jsons/times.json')
            .then((res) => {
                console.log(res);
                console.log(res.data);
                this.setState({
                    dateTime:res.data
                })

            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    componentDidMount() {
       
        this.getTimes();
    }
    render() {
        return (
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
                        <ul >
                           {
                               (()=>{
                                   return this.state.dateTime.map((item,index) => {
                                       return (
                                       <li key={index}>
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

        )
    }
}

export default Zseckill;