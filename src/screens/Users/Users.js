import React, { Component } from "react";
import {
  Card,
  Modal,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Table } from "reactstrap";
import User from "./User";
import AddUser from "./AddUser";
import "./Users.css";
import { Col } from "react-bootstrap";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addBox: false,
      sizeTableLg: 12,
      sizeBoxLg: 0,
    };
  }

  showAddBox = () => {
    this.setState({
      addBox: true,
      sizeTableLg: 9,
      sizeBoxLg: 3,
    });
  };

  hideAddBox = () => {
    this.setState({
      addBox: false,
      sizeTableLg: 12,
      sizeBoxLg: 0,
    });
  };

  render() {
    return (
      <div className="row">
        <Col md={6} lg={this.state.sizeTableLg} className="userDiv">
          <Card>
            <Card.Header>
              <h3 style={{ float: "left" }}>Users</h3>

              <Form inline>
                {/* <FormControl type="text" placeholder="Search" className="ml-auto mr-sm-2" /> */}
                <InputGroup className="ml-auto mb-2">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i className="icon-magnifier"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl id="inlineFormInputGroup" placeholder="Search" />
                  <Button
                    id="add_btn"
                    variant="primary"
                    type="button"
                    onClick={this.showAddBox}
                  >
                    <i className="icon-user-follow"> </i> Add User
                  </Button>
                </InputGroup>
              </Form>
            </Card.Header>
            <Card.Body>
              {this.props.users.user.length == 0 ? null : (
                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Role</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <User
                    delUser={this.props.delUser}
                    users={this.props.users}
                    //modalShow={this.handleShow}
                  />
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={this.state.sizeBoxLg} className="userDiv">
          {this.state.addBox ? (
            <AddUser addUser={this.props.addUser} hideBox={this.hideAddBox} />
          ) : null}
        </Col>

        {/* <Modal
    //    show={this.state.modalShow}
    //    onHide={this.handleClose}
    //   backdrop="static"
    //   keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{this.state.filterCat && this.state.filterCat[0].name }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       {this.state.filterCat && this.state.filterCat[0].name }
      </Modal.Body>
   
    </Modal> */}
      </div>
    );
  }
}
