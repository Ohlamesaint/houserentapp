import React, { Component } from 'react'
import Nav from './Nav'
import Title from './Title'

class Top extends Component {
    render() {
        return (
            <div className="Top">
                <Title />
                <Nav />
            </div>
        )
    }
}

export { Top as default }