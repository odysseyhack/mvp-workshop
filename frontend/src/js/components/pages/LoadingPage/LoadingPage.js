import React, { Component } from 'react'
// import Loader from 'react-loader-spinner'
import './LoadingPage.css'

export default class PageLoader extends Component {
    render() {
        return (
            <div style={{ zIndex: 10000000, position: 'relative', margin: '0 auto', textAlign: 'center', ...this.props.style }}>
                {/* <Loader
                    type="Triangle"
                    color="#00BFFF"
                    height="100"
                    width="100"
                /> */}
                <h3>Loading...</h3>
            </div>
        )
    }
}

