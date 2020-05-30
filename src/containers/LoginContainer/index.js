import * as React from 'react'
import {connect} from 'react-redux'

import Login from '../../screens/Login'

class LoginSection extends React.Component<Props, State>{
    render(){
        return <Login/>
    }
}

const mapStateToProps = state => ({})

export default connect (mapStateToProps, null)(LoginSection)
