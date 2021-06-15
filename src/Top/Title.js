import React, { Component } from 'react'
import './Title.css'

class Title extends Component {

    render() {
        const TitleStyle = {
            height: 500,
            color: "#125233",
            padding: "10px",
        }
        return (
            <div className="container-fluid homepage-bgimage text-center" style={TitleStyle}>
                <div className="col-centered">
                    <p>學生租屋系統</p>
                </div>
            </div>
        )
    }
}

export { Title as default }