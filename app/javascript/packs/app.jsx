import React from 'react'
import PropTypes from 'prop-types'
const Clarifai = require('clarifai')

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clarifai: new Clarifai.App({
                apiKey: 'aea0318f9da24077a7fd41793bf609e2'
            })
        }
    }

    render() {
        return (
            <div>
                <p>Root rendered!</p>
            </div>
        )
    }
}


App.defaultProps = {
}

App.propTypes = {
}
