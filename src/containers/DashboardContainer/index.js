import * as React from 'react'
import Dashboard from '../../screens/Dashboard'
import {connect} from 'react-redux'

class DashboardSection extends React.Component <Props, State>{
    render(){
        return(
            <Dashboard/>
        )
    }
}

function bindAction (dispatch){
    return{

    }
}

const mapStateToProps = state =>({})

export default connect (
    mapStateToProps, bindAction
)(DashboardSection)