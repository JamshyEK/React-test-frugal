import React, { Component } from 'react'


class Location extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchlocation()
    }
    render() {
        return (
            <div>Hellow</div>
        )
    }
}

export default Location