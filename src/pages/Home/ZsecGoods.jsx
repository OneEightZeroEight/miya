import React, { Component } from 'react';
import "../../styles/zfbui.css";
import { Grid } from 'antd-mobile';
// import { Grid } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import GridExample from './aa.js'
// imported as 'GridExample'
class ZsecGoods extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
          }
    }

    componentDidMount() {
      
    }
    render() {
        return(
            <GridExample />
        )
    }
}
export default ZsecGoods;