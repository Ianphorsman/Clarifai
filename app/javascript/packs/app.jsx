import React from 'react'
import PropTypes from 'prop-types'
export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
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
