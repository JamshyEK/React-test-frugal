import * as React from 'react'
import { connect } from 'react-redux'

import Location from '../../screens/Location/index'
import { location } from './action'
class LocationContainer extends React.Component<Props, State>{
    render() {
        return <Location fetchlocation={this.props.fetchlocation} />
    }
}
function bindAction(dispatch) {
    return {
        fetchlocation: () => {
            console.log("index work")
            dispatch(location())
        }
    }
}
const mapStateToProps = state => ({})

export default connect(mapStateToProps, bindAction)(LocationContainer)
