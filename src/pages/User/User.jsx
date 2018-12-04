import React , {Component} from 'react';
// import {Route} from 'react-router-dom';

import Hfooter from '../../components/Hfooter.jsx';
// import Hsearch from '../Home/Hsearch.jsx';
class User extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return (

            <div>
                这是User
                <Hfooter></Hfooter>
            </div>
            
        );
    }
}
export default User;