import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../../styles/Listcar.scss';
import { connect } from 'react-redux';
class Listcar extends Component {
    constructor(props) {
        super(props);
        // this.props = props;
        console.log(props);
        this.state = {
            value : 1
        }
    }
    setmongd(){
        React.axios.post('http://localhost:4444/api/car',{
            method : 'add',
            name : this.props.aa.name,
            //type : this.props.aa.name,
            //desc : this.props.aa.item_highlight,
            price : this.props.aa.real_price,
            imgUrl: this.props.aa.image,
            originalPrice : Number(this.props.aa.real_price*0.8),
            count : this.props.listcart,
            brand : this.props.aa.brand_name,
            dataId : Math.random()*1000000
            
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <div className={this.props.listcar===true?"show":"hidden listcar"} >
                <div className="mask"></div>
                <div className="detail-tankuang detail-selectBox" id="selectBoxPop">
                    <div className="tk-title">
                        <div id="typeInfoBox">
                            <div className="selProImg">
                                <img src={this.props.aa.image} alt="" />
                            </div>
                            <div className="fl selInfo">
                            <span className="selPrice">{this.props.aa.real_price}</span>
                                <span className="stock"></span>
                                <span className="selected">
                                    已选 “<b className="kx">{this.props.aa.code_color}</b> 
                                    <b className="gg"></b>”
                                </span>
                            </div>
                        </div>
                        <div className="closeBtn pop-closeBtn" onClick={this.props.togglelistcar.bind(this)}>
                            <span>X</span>        
                        </div>
                    </div>
                    <div className="tk-body selParams">
                    <dl className="taozhuangItem" id="typeSel">
                    <dt>可选</dt>
                    <dd data-skuid="2957745" data-icon="" className="active"><span>{this.props.aa.code_color}</span>   </dd>
                    <dd className="" data-skuid="2957746" data-icon=""><span>杏色</span></dd>
                    <dd data-skuid="2957747" data-icon="" className=""><span>灰色</span></dd>
                    <dd data-skuid="2957748" data-icon="" className=""><span>绿色</span></dd>
                    </dl>
                    <dl className="taozhuangItem" id="specificationSel">
                    <dt>规格 </dt>
                    <dd data-stock="7"><span>100码</span></dd>
                    <dd data-stock="9"><span>90码</span></dd>
                    <dd data-stock="1"><span>120码</span></dd>
                    <dd data-stock="8"><span>110码</span></dd>
                    <dd data-stock="4"><span>80码</span></dd>
                    <dd data-stock="8"><span>130码</span></dd>
                    </dl>
                    <input type="hidden" value="" id="item_size" name="size" readOnly="readOnly" />
                    
                        

                    </div>
                    <p className='jisuan'>购买数量
                        <span className='fr' style={{marginRight:'15px'}}>
                            <span className='jian' style={{width:'28px',height:'28px',backgroundColor:'#fff',border:'0'}} onClick={this.props.jian.bind(this)}>-</span>
                            <input type="number" id="buyAmount"  value={this.props.listcarvalue} min="1" maxLength="2"  style={{width:'40px',height:'25px',textAlign: "center"}}/>
                            <span className='add' style={{width:'28px',height:'28px',backgroundColor:'#fff',border:'0'}} onClick={this.props.add.bind(this)}>+</span>
                        </span>
                    </p>
                    <div className="tk-btnGroup defaultBlock" onClick={this.props.togglelistcar.bind(this)}>
                         <button id="addToCart" onClick={this.setmongd.bind(this)}>确定</button>
                    </div>
                    <input type="hidden" id="item_id" value="2957745" />
                </div>
            </div>
            </div>
            
                    )
                }
            }
export default connect((state) => {
    return state;
}, (dispatch) => {
    return {
        togglelistcar() {
            dispatch({
                type: 'togglelistcar',
                showlist: {
                    listcart : !this.props.listcart
                }
            })
        },
        add(){
            dispatch({
                type:'add',
                listcarvalue : this.props.listcarvalue+1
            })
        },
        jian(){
            
            dispatch({
                type:'jian',
                listcarvalue : this.props.listcarvalue-1
                
            },()=>{
                if(this.state.value===1){
                    return false;
                }
            })
            
        }
}
})(Listcar);