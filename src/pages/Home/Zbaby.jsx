import React, { Component } from 'react';
import "../../styles/homeSass/home.scss";
class Zbady extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {

        }
    }
    render() {
        return (
         <div className="z_bady">
            <div className="HeaBaby">
                <i className="fa fa-shield" aria-hidden="true"></i>
                <h3>给孩子买安心，蜜芽100%正品保证</h3>
            </div>
            <div className="BabyUnlike">
                <div className="firstImg"><img src={require("../../staic/media/baby1.jpg")} alt="Zrecom"/></div>
                <div><img src={require("../../staic/media/baby3.jpg")} alt="Zrecom"/></div>
                <div><img src={require("../../staic/media/baby5.jpg")} alt="Zrecom"/></div>
                <div><img src={require("../../staic/media/baby3.jpg")} alt="Zrecom"/></div>
                <div><img src={require("../../staic/media/baby5.jpg")} alt="Zrecom"/></div>
            </div>
         </div>
        )
    }
}
export default Zbady;