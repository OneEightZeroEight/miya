import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Listdetaill extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        // console.log(props);
        this.state = {
            listnav: 0,
            lists: [
                { title: '妈妈甄选', href: "", id: "6811", },
                { title: '蜜芽匠作', href: "", id: "18001", },
                { title: '奶粉辅食', href: "", id: "32", },
                { title: '宝宝用品', href: "", id: "68", },
                { title: '童装童鞋', href: "", id: "83", },
                { title: '玩具书籍', href: "", id: "70", },
                { title: '孕产母乳', href: "", id: "67", },
                { title: '美妆护肤', href: "", id: "73", },
                { title: '个护清洁', href: "", id: "14926", },
                { title: '手机数码', href: "", id: "14913", },
                { title: '家用电器', href: "", id: "17282", },
                { title: '家居厨具', href: "", id: "74", },
                { title: '食品保健', href: "", id: "78", },
                { title: '服饰鞋包', href: "", id: "2537", }
            ],
            one: [],
            tow: [],
            three: [],
            four: [],
            curpage: ['one', 'tow', 'three', 'four', 'one', 'tow', 'three', 'four', 'one', 'tow', 'three', 'four', 'one', 'four']

        }
    }
    toggleNav(index, e) {
        this.setState({
            listnav: index
        })

        // console.log(this.state.listnav)
    }
    getJson() {
        React.axios.get('./list.json')
            .then((res) => {
                // console.log(res.data.datas)
                this.setState((prevState) => ({
                    one: res.data.datas.one,
                    tow: res.data.datas.tow,
                    three: res.data.datas.three,
                    four: res.data.datas.four
                }))

                return this.state
            })
            .catch((err) => {
                console.log(err)
            })
    }
    componentDidMount() {
        this.getJson();
    }
    render() {
        // console.log(this.state);
        var i = this.state.curpage[this.state.listnav];
        // console.log(i);display:this.props.isShowlists?"block":"none" ,
        return (
            <div className="classify" style={{ display: this.props.showlist.isShowlist ? "block" : "none", bottom: "44px" }}>
                <div className="sidebar" id="sidebar">
                    <ul style={{ transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)", transitionDuration: "0ms", transform: "translate(0px, 0px) translateZ(0px)" }}>
                        {
                            (() => {
                                return this.state.lists.map((item, index) => {
                                    return <li data-pid={item.id} className={index === this.state.listnav ? "current" : ""} key={index}
                                        onClick={this.toggleNav.bind(this, index)}
                                    >
                                        {item.title}
                                    </li>
                                })
                            })()
                        }

                    </ul>
                </div>
                <div className="content" id="content">
                    <div className="scroll" style={{ transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)", transitionDuration: "0ms", transform: "translate(0px, 0px) translateZ(0px)" }}>
                        {
                            (() => {
                                return this.state[i].map((item, index) => {
                                    return (<div key={index}>
                                        <h3>{item.title}</h3>
                                        {
                                            (() => {
                                                return item.categorys.map((item1, index1) => {
                                                    return <a href='/list/lists/'
                                                        className="items items-dutyfree" key={index1}
                                                        onClick={this.props.toggleList.bind(this, this.props.showlist)}
                                                    >
                                                        <Link to='/list/lists/' replace  >
                                                            <div className="imgbox">
                                                                <img src={item1.banner_image}
                                                                    alt="" />
                                                            </div>
                                                            <p>{item1.c_name}</p>
                                                        </Link>


                                                    </a>
                                                })
                                            })()
                                        }

                                    </div>
                                    )

                                })


                            })()
                        }

                    </div>{/* 1 */}
                </div>
            </div>
        )
    }
}
export default connect((state) => {
    // console.log(state)
    return state;
}, (dispatch) => {
    return {
        toggleList() {
            dispatch({
                type: 'toggleList',
                showlist: {
                    isShowlist: !this.props.showlist.isShowlist,
                    isShowlists: !this.props.showlist.isShowlists,
                }
            })
        }
    }
})(Listdetaill);