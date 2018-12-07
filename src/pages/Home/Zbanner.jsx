import React, { Component } from 'react';

import Swiper from 'swiper';
class Zbanner extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        
    }
    componentDidMount(){
        // this.bannerData();
        var swiperBanner = new Swiper('.swiperLun', {
            loop: true,
            observer: true,
            autoplay:{
                delay:2000,
                disableOnInteraction:false
            },
            pagination: {
              el: '.swiper-pagination',
            },
        });
    }
    render() {
        return (
            <div className="swiper-container swiperLun">
                <div className="swiper-wrapper">
                    <img className="swiper-slide" src={require("../../staic/Zimg/banner1.jpg" )} alt="banner" />
                    <img className="swiper-slide" src={require("../../staic/Zimg/banner2.jpg" )} alt="banner" />
                    <img className="swiper-slide" src={require("../../staic/Zimg/banner3.jpg" )} alt="banner" />
                    <img className="swiper-slide" src={require("../../staic/Zimg/banner4.jpg" )} alt="banner" />
                    <img className="swiper-slide" src={require("../../staic/Zimg/banner5.jpg" )} alt="banner" />
                </div>
                <div className="swiper-pagination"></div>
            </div>

        );
    }
}
export default Zbanner;