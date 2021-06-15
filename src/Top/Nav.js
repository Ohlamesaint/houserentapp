import React, { Component } from 'react'
import Button from './Button'
import Sqlquery from './Sqlquery'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="Navbar ">
                <div className=" justify-content-md-center">
                    <nav className="bg">
                        <div className="nav nav-tabs nav-fill justify-content-center" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">模板查詢</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">SQL查詢</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <Button />

                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col-12 justify-content-md-center">
                                        <Sqlquery />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export { Nav as default }
