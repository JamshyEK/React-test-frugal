import React, { Component } from 'react'
import {
    Button
  } from 'reactstrap';

export default class user extends Component {
  constructor(props){
    super(props)
  }
    render() {
        return (
            <tbody>
          {this.props.users.user.map((x,index)=>(

 <tr 
 key={index}
 >

{/* <td>
 <div>{index+1}</div>

</td> */}
<td>
 <div>{x.id}</div>

</td>

<td>
 <div>{x.name}</div>

</td>

<td>
 <div>{x.age}</div>
</td>
<td>
<div>{x.role}</div>
</td>
<td className="text-right">
   <Button variant="light"
   //onClick={()=>this.props.modalShow(x.id)}
   >
       <i className="icon-eye"></i></Button>
       <Button variant="light"><i className="icon-pencil"> </i></Button> 
       <Button 
       onClick={()=>this.props.delUser(index)} variant="light"><i className="icon-trash"> </i></Button> 
       
       
 </td>
</tr> 
          ))}
       
       
      </tbody>
        )
    }
}
