import React, { Component } from 'react';
import {
    // Card,
    Container,
    Row,
    Col,
    Button,
    Tabs,
    Nav,
    Tab,
    Table,
    Modal,
    NavDropdown,
    Navbar
  } from 'react-bootstrap'

class StoreView extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const data = this.props.storeDtls.item
        return (
            <div>
                <div>
                    <Modal show={this.props.show}
                        onHide={this.props.handleClose}
                        animation={false} size="lg"
                        backdrop="static"
                        className="StoreModal"

                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Store Details View
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                                <Nav variant="pills" >
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Basic Info</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Action</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content style={{ border: 'none', height: "400px" }}>
                                    <Tab.Pane eventKey="first">
                                        <Table responsive bordered>

                                            <tbody>
                                                <tr>
                                                    <td>Address1</td>
                                                    <td>{data !== undefined && data.addr1}</td>

                                                </tr>
                                                <tr>
                                                    <td>Address2</td>
                                                    <td>{data !== undefined && data.addr2}</td>

                                                </tr>
                                                <tr>
                                                    <td>City</td>
                                                    <td>{data !== undefined && data.city}</td>

                                                </tr>
                                                <tr>
                                                    <td>Contact Person</td>
                                                    <td>{data !== undefined && data.cntctPersn}</td>

                                                </tr>
                                                <tr>
                                                    <td>Email</td>
                                                    <td>{data !== undefined && data.email}</td>

                                                </tr>
                                                <tr>
                                                    <td>Website</td>
                                                    <td>{data !== undefined && data.website}</td>

                                                </tr>

                                            </tbody>
                                        </Table>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div>
                                            <div>
                                                <h6 style={{ textAlign: "center" }}>Are you sure you want to change the status?</h6>
                                            </div>
                                            <Row style={{ marginTop: "50px" }}>
                                                <Col xs={12} sm={12} md={4} lg={4}>
                                                    <Button variant="primary" style={{ float: "right" }}>Active</Button>
                                                </Col>
                                                <Col xs={12} sm={12} md={4} lg={4}>
                                                </Col>
                                                <Col xs={12} sm={12} md={4} lg={4}>
                                                    <Button variant="info" style={{ color: "white" }}>Suspend</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>


                            </Tab.Container>


                        </Modal.Body>

                    </Modal>
                </div>

            </div>
        )
    }


}
export default StoreView;
