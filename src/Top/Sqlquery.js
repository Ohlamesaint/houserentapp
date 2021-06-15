import React, { Component } from 'react'
import './Sqlquery.css'
import axios from 'axios'
import ModalButton from './ModalButton'
// import querystring from 'querystring'


class Sqlquery extends Component {

    constructor() {
        super();
        this.state = {
            sql: ""
        }
    }

    typeIn = (e) => {
        this.setState({
            sql : e.target.value
        })
        console.log(this.state.sql);
    }

    render() {
        return (
            <div className="container">
                <h3>請在此處輸入您的SQL查詢</h3>
                <textarea onChange={this.typeIn} className="col-12" placeholder="type in your SQL query ...">{this.state.sql}</textarea>
                <div class="d-grid gap-2 col-3 mx-auto">
                    <ModalButton name='送出！' sql={this.state.sql} />
                </div>
            </div>
        )
    }
}



export { Sqlquery as default }