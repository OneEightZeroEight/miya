import React, { Component } from 'react';
import "../../styles/homeSass/home.scss";
class Hsearch extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {

        }
    }
    render() {
        return (
            <div  className="z_sea">
                <div className="kong"></div>
                <div className="z_title">
                    <span>蜜芽</span>&nbsp;
                    进口母婴正品特卖
                </div>
                <div className="kong">
                    <i className="fa fa-search-plus" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}
export default Hsearch;