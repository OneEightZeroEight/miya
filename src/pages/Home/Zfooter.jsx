import React, { Component } from 'react';
import "../../styles/homeSass/home.scss";
class Zfooter extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {

        }
    }
    render() {
        return (
            <footer className="pub" style={{height: 'auto'}}>
                <div className="line" />
                <div className="download-footer app_down" id="bi-bottom" style={{display: 'block', transformOrigin: '0px 0px 0px', opacity: 1, transform: 'scale(1, 1)'}}>
                <img src="https://img.miyabaobei.com/d1/p5/2016/11/14/01/e1/01e1de76f2290e4e2adc1133d95b4c31192884044.jpg" />
                <a className="btn mia-downApp" href="https://itunes.apple.com/cn/app/mi-ya-bao-bei-zhong-guo-zui/id973366293?mt=8" alt="立即下载" />
                </div>
                <p style={{paddingTop: '0.5rem', fontSize: 13, transformOrigin: '0px 0px 0px', opacity: 1, transform: 'scale(1, 1)'}}><a href="https://www.mia.com" id="backToWeb" title="点击返回电脑版">电脑版首页</a> | <a href="https://m.mia.com">蜜芽触屏版首页</a> | <a href="https://www.mia.com/help-34.html">关于我们</a> | <a href="https://m.mia.com/special/module/index/32243/xcx/ ">营业执照</a></p>
                <p>通过本网站直接或者间接地推销商品或者服务的商业宣传活动均属“广告”</p>
                <p>Copyright © 2018 </p>
                <p>北京花旺在线商贸有限公司 Mia.com 保留一切权利</p>
            </footer>
        )
    }
}
export default Zfooter;