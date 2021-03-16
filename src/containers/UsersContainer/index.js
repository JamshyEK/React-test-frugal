import React, {Component} from 'react';
import {connect} from 'react-redux'
 import Users from '../../screens/Users/Users'
 import {loadingUsers,addUsers,delUsers} from '../UsersContainer/action'
 import {Button } from 'react-bootstrap'


class UsersSection extends Component<Props,State>{
    
 componentDidMount(){
 this.props.getUsers()
}
//  hege = [{name:"Cecilie",age: 21,role:"admin"}];
// userAdd=()=>{
//     console.log("test")
//     var hege = ["Cecilie", "Lone"];
//     addUsers(hege)
// }
    render(){
        return (
            <div>
        <Users users={this.props.users} 
        addUser={this.props.addUsers} 
        delUser={this.props.delUser}
        />
        {/* <Button onClick={()=>this.props.addUsers(this.hege)}/> */}
         {/* <Button onClick={()=>this.props.delUser("a")}/> */}
        </div>
        )
    }
}

const mapStateToProps = state => ({
     users: state.users,
})

const mapDispatchToProps = dispatch => ({
    getUsers:()=>{
        dispatch(loadingUsers())
    },
    addUsers:(user)=>{
        console.log("start add")
        dispatch(addUsers(user))
        console.log("end add")
    },
    delUser:(id)=>{
        console.log("testdel")
        dispatch(delUsers(id))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(UsersSection) 