import React, { Component } from 'react';
import "../../styles/homeSass/home.scss";
class Zrecom extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
                scroll:true,
                dataGnum:['1','2','3'],
                data1:[],
                // dataId:''
                dataNums:1,
                arr2:[],
                isShow:true
               
        }
    }
    componentDidMount() {
        
        this.getRecom();
    }

    jiaSome(dataNums){
       
        React.axios.get('./jsons/recom.json')
        
            .then((res) => {
                // console.log(res);
                // console.log(res.data[0].data2.res.rank); 
                // console.log(this.state);
                let arr22 = this.state.data1;
                if(this.state.dataNums==2){

                    var arr2 = res.data[0].data1.res.rank.concat(res.data[0].data2.res.rank);
                }

                if(this.state.dataNums==3){
                     var arr2 =arr22.concat(res.data[0].data3.res.rank);
                    this.state.isShow=false
                }
                // console.log(arr2);
                this.state.dataNums = 3;
                this.setState({
                  data1:arr2
                })
            //    console.log(this.state.data1)

            })
            .catch((err) => {
                console.log(err);
            })

    }


    getRecom() {
        React.axios.get('./jsons/recom.json')
            .then((res) => {
                // console.log(res);
                // console.log(res.data[0].data1.res.rank);  
                let dataNums = this.state.dataNums+1;            
                this.setState({
                  data1:res.data[0].data1.res.rank,
                  data2:res.data[0].data2.res.rank,
                  dataNums
                })

            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        // console.log(this.state)
        return (
           <div className="z_recom">
                <div className="recomGood">
                    <div className="m-title m-title-list m-tj-icon mt10" style={{display: 'block'}}>
                        <i className="fa fa-tags" aria-hidden="true"></i>
                            为您推荐 
                            <div className="float_r">千万妈妈的口碑之选</div>
                    </div>

                {
                    ((gunndong)=>{
                        
                        return this.state.data1.map((item,index)=>{
                            return (
                                <div className="m-col-1-6 mt10" key={index}>
                                    <div className="koubei_title">
                                        <div className="aa">
                                            
                                            <p>{item.title}</p><span>{item.sku_total}款入选 | {item.comment_num}位妈妈的口碑之选</span>
                                        </div>
                                    </div>
                                   {
                                       (()=>{
                                           return item.rank_item_list.map((items,indexs)=>{
                                               return (
                                                    <div className="small koubei_box" key={indexs} >
                                                        <div className="smallwrap">
                                                            <div className="item aa">
                                                                <div className="img">
                                                                    <img src={items.image} alt="Zrecom" />
                                                                    
                                                                    <span className="ranking_icon">TOP{indexs+1}</span>
                                                                    <span className="free_shippingMark">{items.text}</span>
                                                                    </div>
                                                                <p className="tit">{items.name}</p>
                                                                <p className="price">{items.feedback_rate}%<span>好评</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                               )
                                           }) 
                                       })()   
                                   }
                                </div>
                            
                            )
                        })
                    })()
                }

                {
                    (()=>{
                        if(this.state.isShow){
                            return <div onClick={this.jiaSome.bind(this)} className="jia_some"> <span>加载更多 . . .</span> </div>
                        }else{
                            return <div  className="jia_some"> <span>已经到底了 . . .</span> </div>

                        }
                    })()
                }
                </div> 
           </div>
        )
    }
}
export default Zrecom;


// window.onscroll = () => {
//     var allHeight = document.body.scrollHeight;//body高度
//     var seeHeight = window.screen.height;//可视区域高度
//     var notSeeHeight = document.documentElement.scrollTop;//滚动条卷上去的高度
//     if (!notSeeHeight) {
//         notSeeHeight = document.body.scrollTop;
//     }
//     if (seeHeight + notSeeHeight == allHeight) {}