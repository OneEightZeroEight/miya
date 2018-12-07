import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { inflate } from 'zlib';
class Hfooter extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        // console.log(props);
        this.state = {
            nav: 0,
            navs: [
                { title: "首页", href: "/home/", channel: "1", imgsrc: 'https://img.miyabaobei.com/d1/p4/2016/09/18/fb/a0/fba006d51eb091cf3b63299c59d5e38c813134250.png' },
                { title: "分类", href: "/list/", channel: "2", imgsrc: 'https://img.miyabaobei.com/d1/p5/2016/09/18/90/f1/90f1f82889b47a8de835621452eed22e790295573.png' },
                { title: "购物车", href: "/car/", channel: "3", imgsrc: 'https://img.miyabaobei.com/d1/p4/2016/09/18/88/4e/884e4655e40f2c8e0ad9463a52de7546790508785.png' },
                { title: "我的", href: "/my/", channel: "4", imgsrc: 'https://img.miyabaobei.com/d1/p5/2016/09/18/83/b5/83b56a7715f4c3184b5fc141a6a66435790687263.png' }
            ]
        }
    }
    gotopath(index, e) {
        // console.log(index);
        this.setState({
            nav: index
        })
        // this.props.dispatch.push(this.state.navs[index].href)
    }
    componentDidUpdate(){
        // this.toggleimg()
    }
    componentWillReceiveProps(){

    }
    toggleimg(index,e){
        // console.log(index,this.state.nav);
        // this.setState((prevState) => ({
        //     nav: index,
        // }))
        // if (this.state.info !== nextState.info){
        //     return true;
        // }
        let imgarr = this.state.navs;
        if(index===0){
            imgarr[index].imgsrc = 'https://img.miyabaobei.com/d1/p5/2016/09/18/2d/6e/2d6e980b0b5349275e0b8295f824ef9e812602271.png';
            this.setState = {
                navs :imgarr
            }
            this.forceUpdate();
        // console.log(this.state.navs)
        }else if(index===1){
            imgarr[index].imgsrc = 'https://img.miyabaobei.com/d1/p5/2016/09/18/0e/09/0e09208be94bb47f600d15be785cf830816904666.png';
            this.setState = {
                navs :imgarr
            }
            this.forceUpdate();
        }else if(index===2){
            imgarr[index].imgsrc = 'https://img.miyabaobei.com/d1/p4/2016/09/18/14/a8/14a8f7658ffad480f02279fcd4060bf1817033664.png';
            this.setState = {
                navs :imgarr
            }
            this.forceUpdate();
        }else if(index===3){
            imgarr[index].imgsrc = 'https://img.miyabaobei.com/d1/p4/2016/09/18/dc/41/dc4129f7790242bb9e9d734e438499e2817181623.png';
            this.setState = {
                navs :imgarr
            }
            this.forceUpdate();
        }
        // console.log(this.state.navs)
        // console.log(this.state.nav)
        // console.log(e);
        // console.log(this.props)
    }
    // getlist(index, e) {
    //     console.log(index);
    //     console.log(e);
    //     console.log(this.props)
    //     this.props.togglelist.bind(e)
    //     // if(this===1){
    //     //     console.log(6666);
    //     //     this.props.toggleList.bind(this,this.props.showlist);

    //     // }
    //     // }
    //     console.log(this.props.showlist)

    //     // console.log(this.props.showlist)
    // }
    render() {
        return (
            <div className="footerNav">
                <ul className="tab5">
                    {
                        (() => {
                            return this.state.navs.map((item, index) => {
                                return (<li className="cur" key={index} onClick={ this.props.togglelist.bind(this,this.props.showlist)}>
                                    <Link to={{ pathname: `${item.href}` }} replace key={index}
                                    >
                                        <img src={item.imgsrc} cursrc={item.imgsrc} alt='' onClick={this.toggleimg.bind(this,index)}/>
                                        <span className='f-title'></span>
                                    </Link>
                                </li>
                                )

                            })
                        })()
                    }

                </ul>
            </div>
        )
    }
}
export default connect((state) => {
    return state;
}, (dispatch) => {
    return {
        togglelist() {
            // console.log(this)
            dispatch({
                type: 'toggleList',
                showlist: {
                    isShowlist: !this.props.showlist.isShowlist,
                    isShowlists: !this.props.showlist.isShowlists,
                }
            })
        }
    }
})(Hfooter);