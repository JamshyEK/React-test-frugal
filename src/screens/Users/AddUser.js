import React, { Component } from "react";
import { Card, Modal, Button, Row, Col } from "react-bootstrap";
import { Control, Form, Errors } from "react-redux-form";
const required = (val) => val && val.length;
export default class AddUser extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   id: "",
    //   name: "",
    //   age: "",
    //   role: "",
    // };
  }

  // handleChange = (e) => {
  //   this.setState({
  //     ...this.state,
  //     [e.target.name]: e.target.value,
  //   });

  // this.handleValidation()
  //console.log(this.state);
  // };

  handleSubmit = (e) => {
    //e.preventDefault();
    console.log(e);
   this.props.addUser(e);


  };

  //   handleValidation=()=>{
  //     console.log(this.state)
  //     if(this.state.id==""){
  //         this.setState({
  //             ...this.state,
  //             errors:{
  //                 id:"error"
  //             },
  //           });

  //     }else{
  //         this.setState({
  //             ...this.state,
  //             errors:{
  //                 id:""
  //             },
  //           });
  //     }

  //     if(this.state.name==""){
  //         this.setState({
  //             ...this.state,
  //             errors:{
  //                 name:"error"
  //             },
  //           });
  //     }

  //   }

  render() {
    return (
      <Card>
        <Card.Header>
          <h3 style={{ float: "left" }}>Add User</h3>
          <Button
            onClick={this.props.hideBox}
            variant="light"
            style={{ float: "right" }}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </Button>
        </Card.Header>
        <Card.Body>
          <Form
            model="usersForm"
            id="user-form"
            onSubmit={(values) => this.handleSubmit(values)}
          >
            <div className="form-group">
              <Control.text
                model=".id"
                type="text"
                name="id"
                className="form-control"
                id="id"
                placeholder="Your id"
                validators={{required}}
              />
              <Errors
                className="text-danger"
                model=".id"
                show="touched"
                messages={{
                  required: "Required "
                }}
              />
            </div>

            <div className="form-group">
              <Control.text
                model=".name"
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your name"
                validators={{required}}
              />
               <Errors
                className="text-danger"
                model=".name"
                show="touched"
                messages={{
                  required: "Required "
                }}
              />
            </div>
            <div className="form-group">
              <Control.text
                model=".age"
                type="number"
                name="age"
                className="form-control"
                id="age"
                placeholder="Your age"
                validators={{required}}
              />
               <Errors
                className="text-danger"
                model=".age"
                show="touched"
                messages={{
                  required: "Required "
                }}
              />
            </div>
            <div className="form-group">
              <Control.select
                model=".role"
                type="text"
                name="role"
                id="role"
                placeholder="Your role"
                className="form-control"
                validators={{required}}
              >

                <option disabled selected>
                  Choose Role
                </option>
                <option>User</option>
                <option>Admin</option>
                <option>Super Admin</option>
              </Control.select>
              <Errors
                className="text-danger"
                model=".role"
                show="touched"
                messages={{
                  required: "Required "
                }}
              />
            </div>

            {/* <Form.Group controlId="formGroupName">
              <Form.Control
                name="name"
                type="text"
                onChange={(e) => this.handleChange(e)}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group controlId="formGroupAge">
              <Form.Control
                type="number"
                name="age"
                onChange={(e) => this.handleChange(e)}
                placeholder="Enter age"
              />
            </Form.Group>
            <Form.Group controlId="formGroupRole">
              <Form.Control
                as="select"
                name="role"
                onChange={(e) => this.handleChange(e)}
              >
                <option disabled selected>
                  Choose Role
                </option>
                <option>User</option>
                <option>Admin</option>
                <option>Super Admin</option>
              </Form.Control>
            </Form.Group> */}
            <Row>
              <Col>
                <Button
                  style={{ float: "right" }}
                  variant="outline-primary"
                  type="reset"
                >
                  Clear
                </Button>
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Add
                </Button>
              </Col>
            </Row>
            {/* <Button variant="primary" type="submit">
    Submit
  </Button>
  <Button variant="primary" type="submit">
    Submit
  </Button> */}
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
