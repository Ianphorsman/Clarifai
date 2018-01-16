import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'

const Clarifai = require('clarifai')

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ...props,
            clarifai: new Clarifai.App({
                apiKey: 'aea0318f9da24077a7fd41793bf609e2'
            }),
            modalContext: 'hide',
        }
    }

    render() {
        return (
            <div>
                <Header></Header>
                <Footer></Footer>
            </div>
        )
    }
}


App.defaultProps = {
}

App.propTypes = {
}
