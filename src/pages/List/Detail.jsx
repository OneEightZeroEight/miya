import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../styles/Detail.scss';
import Icon from 'antd'; 
import jquery from 'jquery';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
// const BgElement = Element.BgElement;
import Listcar from './Listcar.jsx'
import { BackTop } from 'antd'; //引入 ant 

class Detail extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(props);
        this.state = {
            contentClass: "titleBar",
            cur: 0,
            showbox:'block',
            title: [
                { name: "商品详情", idx:0},
                { name: "产品参数", idx:1},
                { name: "问题咨询", idx:2}
            ]
        }
    }
    windowOnScroll() {
        let _this = this;
        // console.log(_this)
        window.onscroll = function () {
            //获取滚动条滚动的距离
            let h = document.documentElement.scrollTop;
            // console.log(h);
            if (h > 710) {
                _this.setState({
                    contentClass: "fixed"
                });
            } else {
                _this.setState({
                    contentClass: "titleBar"
                });
            }
        }
    }
    componentDidMount() {
        this.windowOnScroll();
    }
    togglenav(index, e) {
        this.setState((prevState) => ({
            cur: index,
        }))
    }
    render() {
        // console.log(this.state);
        // console.log(this.props);
        return (
            <div>
                {/* 头部 */}
                <header className="headerA1 clearfix" style={{ position: "static" }}>
                    <Link to='/list/lists' replace className="head_left fl"><i className="fa fa-chevron-left search" aria-hidden="true"></i></Link>
                    <div className="headtit_s">商品详情</div>
                    <Link to='/home/' replace className="head_right fr"><i className="fa fa-home search" aria-hidden="true" ></i></Link>
                </header>
                {/* banner */}
                <div className="w201506">
                    <BannerAnim prefixCls="banner-user" className='detailbanner' autoPlay>
                        <Element key="demo1">
                            <TweenOne animation={{ x: -30, type: 'from' }}>
                                <img src={this.props.aa.m_search_pic} alt="0" />
                            </TweenOne>
                        </Element>
                        <Element key="demo2">
                            <TweenOne animation={{ x: -30, type: 'from' }}>
                                <img src="https://img04.miyabaobei.com/d1/p5/2018/05/30/9b/10/9b109479a2cbe768249fe7479eeed7a6637539282.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_1" />
                            </TweenOne>
                        </Element>
                        <Element key="demo3">
                            <TweenOne animation={{ x: -30, type: 'from' }}>
                                <img src="https://img04.miyabaobei.com/d1/p5/2018/05/30/e8/0d/e80d2e662d34ecee061fc24158b418ad637544470.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_2" />
                            </TweenOne>
                        </Element>
                        <Element key="demo4">
                            <TweenOne animation={{ x: -30, type: 'from' }}>
                                <img src="https://img04.miyabaobei.com/d1/p5/2018/05/30/a6/db/a6dbf5efedc46766972b980b48c15b4f637567860.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_3" />
                            </TweenOne>
                        </Element>
                        <Element key="demo5">
                            <TweenOne animation={{ x: -30, type: 'from' }}>
                                <img src="https://img04.miyabaobei.com/d1/p5/2018/05/30/f6/01/f6017be722170e2f1930866298bee290637572160.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_4" />
                            </TweenOne>
                        </Element>
                    </BannerAnim>
                </div>
                {/* 拼团价 */}
                <div className="group-active-info">
                    <div className="group-InfoL">
                        <div>拼团价 ￥<span>{this.props.aa.real_price}</span></div>
                        <div className="group-mPrice">
                            <p><del>{this.props.aa.market_price}</del></p>
                            <i>拼团包邮</i>
                        </div>
                    </div>
                    <div className="group-InfoR">
                        <section>
                            <div className="sale_count">
                            </div>
                            <div id="timer" style={{ display: "none" }}></div>
                        </section>
                        <span></span>
                    </div>
                </div>

                {/* title */}
                <div className="detail-nameInfo">
                    <h4 className="title">
                        <a href="https://m.mia.com/s/b9881_typeb1.html" title="品牌：含章雅舍">
                            {this.props.aa.parent_brand_name}               </a>
                        {this.props.aa.name}       </h4>
                    <div className="priceBox">
                        <div className="activity-price"></div>
                    </div>
                    <div className="descInfo">
                        {this.props.aa.item_highlight}         </div>
                </div>
                {/* 选择商品类型 */}
                <div className="detail-item " style={{ border: "none" }}>
                    <ul className="detail-promiseSign">
                        <li className="js_noplus">满88包邮</li>
                        <li>7天放心退</li>
                        <li>支持换货</li>
                        <li className="huabei">假一赔十</li>
                        <span className="moreBtn" data-pop="explainPop">●●●</span>
                    </ul>

                </div>

                {/* 选择商品 */}
                <div className="mb16">
                    <div className="detail-item haslable">
                        <span className="label">选择</span>
                        <span className="pl5">{this.props.aa.code_color}</span>
                        <span className="pl5" id="size_selected"> , 100cm</span>
                        <span className="moreBtn2" onClick={this.props.togglelistcar.bind(this)} data-pop="selectBoxPop">●●●</span>
                    </div>
                </div>
                {/* 商品信息 style={{position: "relative",top: "110px"}}*/}
                <section className={this.state.contentClass} >
                    {
                        (() => {
                            return this.state.title.map((item, index) => {
                                return <div className={index === this.state.cur ? "current" : ""} key={index}
                                    onClick={this.togglenav.bind(this, index)}
                                > {item.name}</div>

                            })
                        })()
                    }


                </section>

                {/* 图片盒子 */}
                <section className="proBox">
                    <div className="slideBox">
                        <div className={this.state.cur===0?"showblock1 show":"showblock1 hidden"} style={{ minHeight: "535px" }}>
                            <section className="w2 parameters">
                                <div className="xq">
                                    <img src={this.props.aa.m_search_pic} alt="1" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/49/89/4989d82c5c305b48a0741680828b6180637656901.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_1" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/97/01/9701a819c6a9d9364def26ef8ab80a8a637672911.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_2" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/26/73/26731a49f9e6f3814b77bd611d674bdb637681274.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_3" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/e6/d5/e6d5292968d1fc3cafea80e13968021d637691586.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_4" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/a2/09/a209315fb914c36bcea184f0ec8acfc2637697324.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_5" />
                                    <img src="https://img01.miyabaobei.com/d1/p5/2018/05/30/9f/dd/9fdd20d4dc325550c68bac1b57223130637717663.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_6" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/5e/79/5e7907638108b07b0fbdf263738accf8637721027.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_7" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/24/0f/240f4d3410796cb7d2f294e7bb2b1ebe637733987.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_8" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/c7/e4/c7e4a0fc94792b97849aaa461755c8d0637738935.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_9" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/4f/ed/4fedfd0b75de7979ae28fefd81de2ed4637757322.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_10" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/82/37/8237e1e0ae8afd98ebaaf48373ab0d19637761654.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_11" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/24/71/247144622b82ba4021721f4112e26e18637777523.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_12" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/a1/41/a1416f317aeb28e845f3541d072e91a6637778222.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_13" />
                                    <img src="https://img03.miyabaobei.com/d1/p5/2018/05/30/09/44/0944e8942609e0c44f67fd94fd0e44c4637793327.jpg" alt="男童中小童背夏装新款儿童透气薄t打底衫_14" />
                                </div>
                                <div className="xq">
                                    <img data-src="//img.miyabaobei.com/d1/p5/2017/04/19/55/43/55435e31f40e30d8d0edc817749972d2742968754.jpg" src="//img.miyabaobei.com/d1/p5/2017/04/19/55/43/55435e31f40e30d8d0edc817749972d2742968754.jpg" className="lazyload" width="750px" alt="loading" />
                                </div>
                            </section>
                        </div>
                        {/* 这个现在没用 */}
                        <div className={this.state.cur===1?"show":"showblock2 hidden"} style={{ minHeight: "535px" , display:'none'}}>
                            <section className="w201506">
                                <div className="w201506b parameters mt10">
                                    <p>
                                        商品名称：含章雅舍 男童中小童背夏装新款儿童透气薄t打底衫<br />
                                        品牌：含章雅舍<br />
                                        分类：T恤<br />
                                        商品条码：<br />
                                        参考身高：90cm,110cm,120cm,130cm,100cm<br />
                                        厚薄：薄款<br />
                                        适用季节：夏季<br />
                                        适用年龄：其他<br />
                                        适用性别：男<br />
                                        风格：百搭<br />
                                        产地：中国<br />
                                    </p>
                                </div>
                            </section>
                        </div>

                        <div className={this.state.cur===2?"show":"showblock3 hidden"} style={{ minHeight: "535px" , display:'none'}}>
                            <div className="QA">
                                <dl>
                                    <dt className="Q">1、我如何购买？</dt>
                                    <dd className="A">每个套餐的价格、包含项目、注意事项会略有不同，请您注意页面描述及套餐温馨提示。购买付款成功后会收到短信，如果商品没有标“免预约”字样，需要您尽快凭下单后收到的短信优惠码和服务商预约服务。服务商预约电话在商品详情页均有标注。</dd>
                                </dl>
                                <dl>
                                    <dt className="Q">2、订单下单后，我如何付款？</dt>
                                    <dd className="A">同蜜芽官网的付款方式，我们目前支持支付宝、微信支付等多种支付方式供您选择。</dd>
                                </dl>
                                <dl>
                                    <dt className="Q">3、我怎么知道自己定成功没？</dt>
                                    <dd className="A">预订成功并付款后，我们的小蜜芽客服会马上对订单进行处理。订单成功后，会为您发出预订成功的短信。如订单在预订过程中有异常，我们的小蜜芽客服也会第一时间联系您，请您保持手机畅通。</dd>
                                </dl>
                                <dl>
                                    <dt className="Q">4、如果我不想要了可以退吗？</dt>
                                    <dd className="A">我们部分服务是支持随时退和延时退的。但是订单一旦在服务商处开始消费或预约成功，平台将不再接受取消订单和退款处理。如果在合理时间内，您需要取消订单，请致电蜜芽客服申请取消并退款。</dd>
                                </dl>
                                <dl>
                                    <dt className="Q">5、取消订单后，多长时间可以退款？</dt>
                                    <dd className="A">在您申请退款之后，我们会在24小时之内处理您的取消订单，订单确认取消成功后，您支付的款项最迟将会在3-5个工作日（视银行支付网关情况而定）退到您原支付的账户中，请您耐心等待。</dd>
                                </dl>
                                <dl>
                                    <dt className="Q">6、如何查看我已经预定成功的订单？</dt>
                                    <dd className="A">在您的蜜芽账户中，会有订单的相关信息供您查询。您只要访问蜜芽官网，登录后，点击“我的订单”，即可查看到已经预定成功的订单。</dd>
                                </dl>
                                <dl>
                                    <dt className="Q">7、有一些产品细节我该如何确认？</dt>
                                    <dd className="A">我们已经在产品的购买页面，详尽的列出了套餐介绍及注意事项，如果您对此还有疑问，欢迎您随时联系蜜芽在线进行确认。</dd>
                                </dl>
                                <dl>
                                    <dt className="Q">8、蜜芽平台商品价格说明</dt>
                                    <dd className="A">
                                        <ul>
                                            <li>1. 折扣价（显示如￥199）：如无特殊说明，折扣指划线价（如：吊牌价，品牌商、供应商的指导价、建议零售价，品牌专柜价或该商品在蜜芽平台上曾经展示过的销售价）等某一价格基础上计算出的优惠比例和优惠金额；</li>
                                            <li>2. 划线价（显示如<del>￥399</del>）：商品划线价格可能是吊牌价，品牌商、供应商的指导价、建议零售价，品牌专柜价或该商品在蜜芽平台上曾经展示过的销售价。由于时间、地区的差异性及市场行情的波动性。品牌商品的标价、商品吊牌价可能会与您购物展示不一致。该价格仅供消费者参考；</li>
                                            <li>3. 疑问/异常问题：商品促销信息以商品详情页面为准；商品的具体售价以订单结算页面为准；如您在购买商品时发现活动商品价格或促销活动，商品价格异常，请您在购买前联系蜜芽客服，由客服将您的问题第一时间反馈给销售商，进而帮助您解答。</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </section>


                {/* 推荐的 */}
                <div className="group-item-tj">
                    <h3>为你推荐</h3>
                    <div className="items">
                        <a href="/item-1716831.html" className="item">
                            <div className="imgbox">
                                <img src="https://img05.miyabaobei.com/d1/p5/2017/02/22/c6/a9/c6a9732941d1a4a312ea1f9d32c565c7442764713.jpg@base@tag=imgScale&amp;w=447" alt="" />
                            </div>
                            <p className="tit">贝壳元素春秋女童涂鸦卫衣</p>
                            <div className="sp">拼团价 <em>39</em></div>
                            <div className="mp">已售98件</div>
                        </a>
                        <a href="/item-2947313.html" className="item">
                            <div className="imgbox">
                                <img src="https://img06.miyabaobei.com/d1/p5/2018/10/31/f1/63/f1635f998166f7305958d73b7c553236985146615.jpg@base@tag=imgScale&amp;w=447" alt="" />
                            </div>
                            <p className="tit">儿童韩版加绒高领打底衫潮</p>
                            <div className="sp">拼团价 <em>49.9</em></div>
                            <div className="mp"><span style={{ color: "#fff" }}>空</span></div>
                        </a>
                        <a href="/item-2906304.html" className="item">
                            <div className="imgbox">
                                <img src="https://img05.miyabaobei.com/d1/p5/2018/09/08/e0/28/e0288bb1d257437e255545de81cdec23116039449.jpg@base@tag=imgScale&amp;w=447" alt="" />
                            </div>
                            <p className="tit">女宝宝童装条纹打底衫</p>
                            <div className="sp">拼团价 <em>39.9</em></div>
                            <div className="mp">已售47件</div>
                        </a>
                        <a href="/item-2957551.html" className="item">
                            <div className="imgbox">
                                <img src="https://img06.miyabaobei.com/d1/p5/2018/11/17/81/4b/814baf58cae7470ae3bed6618429fc92659093319.jpg@base@tag=imgScale&amp;w=447" alt="" />
                            </div>
                            <p className="tit">婴儿新生儿连体衣</p>
                            <div className="sp">拼团价 <em>109</em></div>
                            <div className="mp"><span style={{ color: "#fff" }}>空</span></div>
                        </a>
                        <a href="/item-2906322.html" className="item">
                            <div className="imgbox">
                                <img src="https://img05.miyabaobei.com/d1/p5/2018/09/09/cb/bc/cbbcdfd72bec6f5ff549158636b5c78a273907119.jpg@base@tag=imgScale&amp;w=447" alt="" />
                            </div>
                            <p className="tit">宝宝春秋韩版童装</p>
                            <div className="sp">拼团价 <em>39.9</em></div>
                            <div className="mp"><span style={{ color: "#fff" }}>空</span></div>
                        </a>
                        <a href="/item-2608288.html" className="item">
                            <div className="imgbox">
                                <img src="https://img06.miyabaobei.com/d1/p5/2017/11/30/d8/49/d849234c074a4bfbf6e184f2be3f7886349956153.jpg@base@tag=imgScale&amp;w=447" alt="" />
                            </div>
                            <p className="tit">3件78元秋冬款福袋</p>
                            <div className="sp">拼团价 <em>78</em></div>
                            <div className="mp"><span style={{ color: "#fff" }}>空</span></div>
                        </a>
                    </div>
                </div>

                {/* totop */}
                <div>
                    <BackTop />
                    {/* <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong> */}

                </div>
                {/* 底部APP */}
                <footer className="pub" style={{height: "auto"}}>
                    <div className="line"></div>
                    <div className="download-footer app_down" id="bi-bottom" style={{display: "block"}}>
                        <img src="https://img.miyabaobei.com/d1/p5/2016/11/14/01/e1/01e1de76f2290e4e2adc1133d95b4c31192884044.jpg" alt='' />
                        <a className="btn mia-downApp" href="https://itunes.apple.com/cn/app/mi-ya-bao-bei-zhong-guo-zui/id973366293?mt=8" alt="立即下载" > </a>
                    </div>
                    <p style={{paddingTop: "0.5rem" ,fontSize: "13px"}}>
                        <a href="https://www.mia.com" id="backToWeb" title="点击返回电脑版">电脑版首页</a> | 
                        <a href="https://m.mia.com">蜜芽触屏版首页</a> | 
                        <a href="https://www.mia.com/help-34.html">关于我们</a> | 
                        <a href="https://m.mia.com/special/module/index/32243/xcx/ ">营业执照</a></p>
                    <p>通过本网站直接或者间接地推销商品或者服务的商业宣传活动均属“广告”</p>
                    <p>Copyright © 2018 </p>
                    <p>北京花旺在线商贸有限公司 Mia.com 保留一切权利</p>
                </footer>


                <Listcar></Listcar>
                {/* 底部购物车 */}
                <div className="detail-fixedCart fixed_cart_options">
                    <div className="cartRight">
                        <a href='1' className="store" style={{ display: "none" }}>
                            <span className="h_store">店铺</span>
                        </a>

                        <Link to="/car/" replace onClick={this.props.getdetails.bind(this)}>
                            <span className="h_cart">购物车</span>
                            <em className="zb" id="cartNum">{this.props.carnumber}</em>
                        </Link>
                    </div>

                    <div className="btnGroup" onClick={this.props.togglelistcar.bind(this)}>
                        <button href="javascritp:;" className="w50 firstBtn js_buy" >
                            <p>￥{this.props.aa.market_price}</p><p>单独购买</p>
                        </button>
                        <button href="javascritp:;" className="w50 js_tuangou" >
                            <p>￥{this.props.aa.real_price} </p>   <p>2人拼团</p>
                        </button>
                        <button href="javascritp:;" className="groupon_btn js_tuangou _free_open" data-gid="869464">
                            0元开团<br />
                            满5人 团长免单
                        </button>
                    </div>
                </div>


            </div>
        )
    }
}
export default connect((state) => {
    console.log(state);
    return state;
}, (dispatch) => {
    return {
        getdetails() {
            dispatch({
                type: 'getdetails',
                aa: this.props.aa,
                listcar : !this.props.listcar
            })
        },
        togglelistcar() {
            dispatch({
                type: 'togglelistcar',
                listcar : !this.props.listcar
            })
        }
    }
})(Detail);