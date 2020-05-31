import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Tabs,
    Nav,
    Tab,
    Table,
    Modal,
    Container
} from 'react-bootstrap'
import './UserViewModal.css'

class UserViewModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userActiveShow: false,
            userSuspndShow: false

        }
    }

    handleUserActiveView = () => {
        this.setState({
            userActiveShow: true,

        })
    }

    handleUserActiveClose = () => {
        this.setState({ userActiveShow: false })
    }

    handleUserSuspndView = () => {
        this.setState({
            userSuspndShow: true,

        })
    }

    handleUserSuspndClose = () => {
        this.setState({ userSuspndShow: false })
    }



    render() {

        return (
            <div>
                <div className="userModalDiv">
                    <Modal show={this.props.show}
                        onHide={this.props.handleClose}
                        animation={false} size="lg"
                        backdrop="static"
                    // className="userModal"
                    //  style={{ backgroundColor: '#00000005' }}
                    >
                        <Modal.Header style={{ fontSize: "35px" }} closeButton>
                            <Modal.Title>
                                <span style={{ fontSize: "20px" }}>
                                    User Details View
                                </span>
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body style={{ height: "450px" }}>

                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <div className="userNavdiv">
                                    <Nav variant="pills" style={{ paddingLeft: "25px", paddingRight: "25px" }}>
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Basic Info</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Action</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <Tab.Content style={{ border: 'none' }}>

                                    <Tab.Pane eventKey="first">
                                        <div className="userModalTbl" >
                                            <Table responsive bordered>
                                                <tbody>
                                                    <tr>
                                                        <td>Name</td>
                                                        <td className="userModalCap"></td>

                                                    </tr>

                                                    <tr>
                                                        <td>Last Name</td>
                                                        <td className="userModalCap"></td>

                                                    </tr>
                                                    <tr>
                                                        <td>Mobile Number</td>
                                                        <td className="userModalCap"></td>

                                                    </tr>
                                                    <tr>
                                                        <td>Email</td>
                                                        <td className="userModalCap"></td>

                                                    </tr>

                                                    <tr>
                                                        <td>Image</td>
                                                        <td className="userModalCap"></td>

                                                    </tr>




                                                </tbody>
                                            </Table>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <div>
                                            <div>
                                                <h6 style={{ textAlign: "center", marginTop: "20px" }}><b>Are you sure you want to change the status?</b></h6>
                                            </div>
                                            <Row style={{ marginTop: "50px" }}>
                                                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                    <Button className="userActivBtn"
                                                        onClick={() =>
                                                            this.handleUserActiveView()
                                                        }
                                                    >
                                                        Active
                                                        </Button>


                                                    <Modal
                                                        show={this.state.userActiveShow}
                                                        onHide={this.handleUserActiveClose}
                                                        animation={false}
                                                        size="sm"
                                                        className="userActvMdl"
                                                    >

                                                        <Modal.Body className="userActvMdlBdy">
                                                            <h6><b>Are you sure you want to active?</b></h6>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button className="userActvMdlCnclBtn" onClick={this.handleUserActiveClose}>
                                                                CANCEL
                                                             </Button>
                                                            <Button className="userActvMdlActvBtn" onClick={this.handleUserActiveClose}>
                                                                OK
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>


                                                </Col>

                                                {/* <Col xs={12} sm={12} md={4} lg={4}>
                                                </Col> */}
                                                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                    <Button
                                                        className="userSuspndBtn"
                                                        onClick={() =>
                                                            this.handleUserSuspndView()
                                                        }
                                                    >Suspend
                                                    </Button>



                                                    <Modal
                                                        show={this.state.userSuspndShow}
                                                        onHide={this.handleUserSuspndClose}
                                                        animation={false}
                                                        size="sm"
                                                        className="userActvMdl"
                                                    >

                                                        <Modal.Body className="userActvMdlBdy">
                                                            <h6><b>Are you sure you want to suspend?</b></h6>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button className="userActvMdlCnclBtn" onClick={this.handleUserSuspndClose}>
                                                                CANCEL
                                                             </Button>
                                                            <Button className="userActvMdlActvBtn" onClick={this.handleUserSuspndClose}>
                                                                OK
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>

                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>


                            </Tab.Container>



                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>

                    </Modal>
                </div>
            </div>
        )
    }

}
export default UserViewModal;