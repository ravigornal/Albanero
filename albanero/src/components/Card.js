import React, { Component } from 'react'
import {connect} from 'react-redux'
import './../App.css'
import {Link} from "react-router-dom";
import { deleteCard } from './redux/actions/index';

export class Card extends Component {
    render() {
        const {cards} =this.props;
        return (
            <div>
                <button type="button" class="btn btn-info" onClick={this.props.createCard}>Add Card</button>
                <Link to="/chart"><button type="button" class="btn btn-info ml-1" >Graph Chart</button></Link>
                <div class="card-deck row">
                    { Array.isArray(cards) && cards.map(ele=>{
                        return(
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div id="closeablecard" class="card card-hover-shadow mt-4">
                                    <div class="card-header bg-transparent border-bottom-0">
                                        <button  type="button" class="close" onClick={()=>{this.props.deleteCard(ele.id)}} >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="card-body mt-n5">
                                        <div className="d-flex justify-content-between m-2">   
                                            <h6 class="">Name : {ele.name}</h6>
                                            <h6>Id : {ele.id}</h6>
                                        </div>
                                        <p class="d-flex justify-content-between m-2">Value : {ele.value}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.addCard.cards
    }
}

export default connect(mapStateToProps,{deleteCard})(Card);
