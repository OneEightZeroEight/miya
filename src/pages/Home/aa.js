import React, { Component } from 'react';

import { Grid } from 'antd-mobile';




const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

function getTimes(){
    React.axios.get('./jsons/seckillGoods.json')
        .then((res) => {
           console.log(res);

        })
        .catch((err) => {
            console.log(err);
        })
};




const GridExample = () => (
  <div>
    <Grid data={data} isCarousel onClick={_el => console.log(_el)} />
  </div>
);


export default GridExample;