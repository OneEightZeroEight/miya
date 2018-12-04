import React , {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Hfooter from '../../components/Hfooter.jsx';
import ListHeader from './ListHeader.jsx';
import Listdetail from './Listdetail.jsx';
import Lists from './Lists.jsx';
// import '../../styles/List.scss';

class List extends Component{
    constructor(props){
        super(props);
        this.props = props;
        // console.log(props);
    }
    render(){
        return (

            <div>
                <ListHeader></ListHeader>
                <Route path='/list/' component={Listdetail } />
                <Route path='/list/lists/' component={Lists} />
                <Hfooter></Hfooter>
            </div>
            
        );
    }
}
export default connect((state)=>{
    // console.log(state)
    return state;
    
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
})(List);