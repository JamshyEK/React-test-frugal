import React, { Component } from 'react'
import {
  Progress,
  Button
} from 'reactstrap';

export default class Dog extends Component {
    constructor() {
        super()
        // this.state = {
        //     userShow:false,
        //   userData: [
        //       {
        //           name:'Reshma',
        //           LName:'cp',
        //           email:'reshmacpmail@gmail.com',
        //           mobileNo:'9674586936',
        //           status:'Created',
        //           picture:''
        //       },
        //       {
        //         name:'Saranya',
        //         LName:'N',
        //         email:'reshmacpmail@gmail.com',
        //         mobileNo:'9674586936',
        //         status:'Created',
        //         picture:''
        //     }
        //   ],
        
        // }
      }
    render() {
       //loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

      //console.log(this.props.dog.dog)
        return (    


          <tbody>
            {this.props.dog.dog.map(x=>(
 <tr key={x.id}>
 <td className="text-center">
   <div className="avatar">
     <img src={x.image.url} className="img-avatar" alt="dog image" />
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
 <td>
   <div>{x.breed_group}</div>
   <div className="small text-muted">
      {x.bred_for}
 </div>
 </td>
 <td>
   <div>{x.origin}</div>
 </td>
 <td>
   <div><Button onClick={()=>this.props.modalShow(x.id)}><i className="icon-eye"></i></Button></div>
 </td>
</tr>
            ))}
         
         
        </tbody>



            
                    //  <tbody>
                    //       {this.state.userData.map((item, i) => (
                    //         <tr key={i}>
                    //           <td>{i + 1}</td>
                    //           <td className="userCap">{item.name}</td>
                    //           <td className="userCap">{item.LName}</td>
                    //           <td className="userCap">{item.mobileNo}</td>
                    //           <td className="userCap">{item.email}</td>
                    //           <td className="userCap">{item.status}</td>
                    //           <td className="userViewIcon">
                              
                    //           </td>
    
                    //         </tr>
                    //       ))
                    //       }
    
                    //     </tbody>
           
        )
    }
}
