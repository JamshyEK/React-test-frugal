import React, { Component } from 'react';
import { Table, Card } from 'react-bootstrap'
import './PoggyUsers.css'
import UserViewModal from '../PoggyUsers/UserViewModal'

class PoggyUsers extends Component {

    constructor() {
        super()
        this.state = {
            userShow:false,
          userData: [
              {
                  name:'Reshma',
                  LName:'cp',
                  email:'reshmacpmail@gmail.com',
                  mobileNo:'9674586936',
                  status:'Created',
                  picture:''
              },
              {
                name:'Saranya',
                LName:'N',
                email:'reshmacpmail@gmail.com',
                mobileNo:'9674586936',
                status:'Created',
                picture:''
            }
          ],
        
        }
      }

      handleShowView = () => {
        this.setState({
          userShow: true,
         
        })
      }
    
      handleCloseView = () => {
        this.setState({ userShow: false })
      }

    //   componentDidMount() {

    //     try {
    //       fetch("http://139.59.78.74:9400/api/v1/users", {
    //         method: 'GET',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    
    //         }
    //       })
    //         .then(response => response.json())
    //         .then(response => {
    //           console.log("--------------------res", response.rows)
    //           this.setState({
    //             storeData: response.rows
    //           })
    
    //         })
    //     }
    
    //     catch (err) {
          
    //     }
    //   }

    render() {
        return (
            <div>
            <div>
              <div>
                <div className="userDiv">
                  <Card>
                    <Card.Header><h3>Users</h3></Card.Header>
                    <Card.Body>
                      <Table
                        responsive
                        className="userMainTable"
                        bordered
                      >
                        <thead >
                          <tr>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Mobile Number</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
    
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.userData.map((item, i) => (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td className="userCap">{item.name}</td>
                              <td className="userCap">{item.LName}</td>
                              <td className="userCap">{item.mobileNo}</td>
                              <td className="userCap">{item.email}</td>
                              <td className="userCap">{item.status}</td>
                              <td className="userViewIcon">
                                <i className="fa fa-eye fa-lg "
                                  onClick={() =>
                                    this.handleShowView()
                                  }
                                  ></i>
                                <UserViewModal
                                                show={this.state.userShow}
                                                handleClose={this.handleCloseView}
                                               
                                              />
                              </td>
    
                            </tr>
                          ))
                          }
    
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default PoggyUsers;