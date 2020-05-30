import * as React from 'react'
import { connect } from 'react-redux'

import Location from '../../screens/Location/index'

class LocationContainer extends React.Component<Props, State>{
    render() {
        return <Location />
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, null)(LocationContainer)
