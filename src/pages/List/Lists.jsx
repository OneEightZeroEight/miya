import React ,{Component} from 'react';
import {connect} from 'react-redux';
// import Hfooter from '../../components/Hfooter.jsx';
// import ListHeader from './ListHeader.jsx';
class Lists extends Component{
    constructor(props){
        super(props);
        this.props = props;
        console.log(props);
        this.state ={

        }
    }
    render(){
        return(
            <div>
                <div style={{display:this.props.showlist.isShowlists?"block":"none"}}>
                     i奥迪就爱上了的完全破解打破阿瑟东；了阿三低价商品贩售
                </div>
               
                {/* <ListHeader></ListHeader> */}
                {/* <Hfooter></Hfooter> */}
            </div>
        )
    }
}
export default connect((state)=>{
    console.log(state)
    return state
},(dispatch)=>{
    return {
        toggleList(){
            dispatch({
                type:'toggleList',
                showlist:{
                    isShowlist : !this.props.showlist.isShowlist,
                    isShowlists : !this.props.showlist.isShowlists,
                }
            })
        }
    }
})(Lists);