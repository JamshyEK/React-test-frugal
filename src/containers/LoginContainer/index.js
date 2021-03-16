import * as React from 'react'
import {connect} from 'react-redux'

import Login from '../../components/Pages/Login'

class LoginSection extends React.Component{
    render(){
        return <Login/>
    }
}

const mapStateToProps = state => ({})

export default connect (mapStateToProps, null)(LoginSection)
