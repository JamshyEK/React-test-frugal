import * as React from 'react'
import {connect} from 'react-redux'


import Signup from '../../components/Pages/Register'

class SignupSection extends React.Component<Props, State>{
    render(){
        return <Signup/>
    }
}

const mapStateToProps = state => ({})

export default connect (mapStateToProps, null)(SignupSection)
