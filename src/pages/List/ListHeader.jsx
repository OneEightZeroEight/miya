import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
class ListHeader extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        // console.log(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="wrapper">
                <div className="searchHead">
                    <Link  to='/home/'  replace >
                        <span className='left'
                        onClick={this.props.togglelist.bind(this, this.props.showlist)}>
                            <i className="fa fa-chevron-left search" aria-hidden="true"></i>
                        </span>
                        
                    </Link>

                    <a href="index" className="icon-lt icon-close" style={{ display: "none" }}> </a>
                    <input type="hidden" value="0" className="closeButton" />

                    <span href="index1" className="icon-rt icon-home" style={{ float: "right" }}>
                        <i className="fa fa-home search" aria-hidden="true" ></i>
                    </span>
                    <a href="index" className="icon-rt btn-qx" style={{ display: "none" }}>取消</a>

                    <div className="iptbox">
                        <form className='formbox' action="/search/setkeyword" method="get">
                            <input type="search" placeholder="请输入关键字搜索" id="search" name="search" />
                        </form>
                    </div>
                </div>
                <div className="search_result" style={{ display: "none" }}></div>
                {/* <div className="search_history">
                            <section className="shBox">
                                <h3 className="search_history1">热门搜索</h3>
                                <ul>
                                </ul>
                            </section>
                            <div className="search_historyHr"></div>
                            <section className="shBox shBoxhistory">
                                <h3 className="search_history2">最近搜索</h3>
                                <ul></ul></section>
                            <div className="btn-clear">清空搜索历史</div>
                        </div> */}
            </div>
        )
    }
}
export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        togglelist() {
            dispatch({
                type: 'togglelist',
                showlist: {
                    isShowlist: !this.props.showlist.isShowlist,
                    isShowlists: !this.props.showlist.isShowlists,
                }

            })
        }
    }
})(ListHeader);