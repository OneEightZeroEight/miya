import React , {Component} from 'react';
import "../../styles/zfbui.css";
// import '../../styles/homeJS/VQ.js';
// import '../../styles/homeJS/common.js';
// import '../../styles/homeJS/fastclicks.js';
// import '../../styles/homeJS/kitchen-sink.js';
// import '../../styles/homeJS/preact.min.js';
// import '../../styles/homeJS/wz.js';




class ZsecGoods extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            secGoods:[]
        }
        
    }
    render(){
        return (

            <div className="am-grid am-grid-square am-grid-line am-grid-carousel">
                <div className="slider am-carousel" style={{position: 'relative', display: 'block', width: '100%', height: 'auto', boxSizing: 'border-box', visibility: 'visible'}}>
                    <div className="slider-frame" style={{position: 'relative', display: 'block', overflow: 'hidden', height: 'auto', margin: 0, padding: 0, transform: 'translate3d(0px, 0px, 0px)', boxSizing: 'border-box'}}>
                        <ul className="slider-list" style={{transform: 'translate3d(0px, 0px, 0px)', position: 'relative', display: 'block', margin: 0, padding: 0, height: 187, width: 750, cursor: 'inherit', boxSizing: 'border-box'}}>
                            <li className="slider-slide" style={{position: 'absolute', left: 0, top: 0, display: 'inline-block', listStyleType: 'none', verticalAlign: 'top', width: 375, height: 'auto', boxSizing: 'border-box', margin: 'auto 0px'}}>
                                <div className="am-grid-carousel-page">
                                    <div className="am-flexbox am-flexbox-justify-center am-flexbox-align-stretch" style={{}}>
                                        <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                                            <div className="am-grid-item-content">
                                                <div className="am-grid-item-inner-content column-num-4">
                                                    <img className="am-grid-icon" src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="" />
                                                    <div className="am-grid-text">name0</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                                            <div className="am-grid-item-content">
                                                <div className="am-grid-item-inner-content column-num-4"><img className="am-grid-icon"
                                                        src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt=""  />
                                                    <div className="am-grid-text">name1</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                                            <div className="am-grid-item-content">
                                                <div className="am-grid-item-inner-content column-num-4"><img className="am-grid-icon"
                                                        src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="" />
                                                    <div className="am-grid-text">name2</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                                            <div className="am-grid-item-content">
                                                <div className="am-grid-item-inner-content column-num-4"><img className="am-grid-icon"
                                                        src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="" />
                                                    <div className="am-grid-text">name3</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="am-flexbox am-flexbox-justify-center am-flexbox-align-stretch" style={{}}>
                                        <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                                            <div className="am-grid-item-content">
                                                <div className="am-grid-item-inner-content column-num-4"><img className="am-grid-icon"
                                                        src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="" />
                                                    <div className="am-grid-text">name4</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                                            <div className="am-grid-item-content">
                                                <div className="am-grid-item-inner-content column-num-4"><img className="am-grid-icon"
                                                        src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="" />
                                                    <div className="am-grid-text">name5</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                                            <div className="am-grid-item-content">
                                                <div className="am-grid-item-inner-content column-num-4"><img className="am-grid-icon"
                                                        src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="" />
                                                    <div className="am-grid-text">name6</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                                            <div className="am-grid-item-content">
                                                <div className="am-grid-item-inner-content column-num-4"><img className="am-grid-icon"
                                                        src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt="" />
                                                    <div className="am-grid-text">name7</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="slider-slide" style={{position: 'absolute', left: 375, top: 0, display: 'inline-block', listStyleType: 'none', verticalAlign: 'top', width: 375, height: 'auto', boxSizing: 'border-box', margin: 'auto 0px'}}>
                                <div className="am-grid-carousel-page">
                                    <div className="am-flexbox am-flexbox-justify-center am-flexbox-align-stretch" style={{}}>
                                        <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                                            <div className="am-grid-item-content">
                                                <div className="am-grid-item-inner-content column-num-4"><img className="am-grid-icon"
                                                        src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" alt=""/>
                                                    <div className="am-grid-text">name8</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="am-flexbox-item am-grid-item am-grid-null-item" style={{width: '25%'}} />
                                        <div className="am-flexbox-item am-grid-item am-grid-null-item" style={{width: '25%'}} />
                                        <div className="am-flexbox-item am-grid-item am-grid-null-item" style={{width: '25%'}} />
                                    </div>
                                    <div className="am-flexbox am-flexbox-justify-center am-flexbox-align-stretch" style={{}}>
                                        <div className="am-flexbox-item am-grid-item am-grid-null-item" style={{width: '25%'}} />
                                        <div className="am-flexbox-item am-grid-item am-grid-null-item" style={{width: '25%'}} />
                                        <div className="am-flexbox-item am-grid-item am-grid-null-item" style={{width: '25%'}} />
                                        <div className="am-flexbox-item am-grid-item am-grid-null-item" style={{width: '25%'}} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="slider-decorator-0" style={{position: 'absolute', bottom: 0, width: '100%', textAlign: 'center'}}>
                        <div className="am-carousel-wrap">
                            <div className="am-carousel-wrap-dot am-carousel-wrap-dot-active"><span /></div>
                            <div className="am-carousel-wrap-dot"><span /></div>
                        </div>
                    </div>
                    <style type="text/css" dangerouslySetInnerHTML={{__html: ".slider-slide > img {width: 100%; display: block;}" }} /></div></div>
          
        );
    }
}
export default ZsecGoods;