import React, { Component } from 'react'
import {
  Button
} from 'reactstrap';
export default class Cat extends Component {
    constructor() {
        super()
      }
    render() {
        return (
          <tbody>
          {this.props.cat.cat.map(x=>(
<tr key={x.id}>
<td className="text-center">
 <div className="avatar">
   <img src={x.image.url} className="img-avatar" alt="cat image" />
   {/* <span className="avatar-status"></span> */}
 </div>
</td>
<td>
 <div>{x.name}</div>

</td>

<td>
 <div >
  
   <div >
     <small className="text-muted">{x.life_span}</small>
   </div>
 </div>
</td>
{/* <td>
 <div>{x.description}</div>
 <div className="small text-muted">
    {x.bred_for}
</div>
</td> */}
<td>
 <div>{x.origin}</div>
</td>
<td>
<div><Button onClick={()=>this.props.modalShow(x.id)}><i className="icon-eye"></i></Button></div>
</td>
</tr>
          ))}
       
       
      </tbody>

        )
    }
}
