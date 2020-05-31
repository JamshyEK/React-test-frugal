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
import './StoreViewModel.css'
import StoreActiveModal from '../StoreDetails/StoreActiveModal'
import StoreSuspendModal from '../StoreDetails/StoreSuspendModal'

class StoreViewModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            storeActiveShow: false,
            storeSuspndShow: false,
        }
    }

    handleActiveView = () => {
        this.setState({
            storeActiveShow: true,

        })
    }

    handleCloseView = () => {
        this.setState({ storeActiveShow: false })
    }

    handleSuspendView = () => {
        this.setState({
            storeSuspndShow: true,

        })
    }

    handleCloseSuspnd = () => {
        this.setState({ storeSuspndShow: false })
    }


    render() {
        console.log("=====================>", this.props.storeDtls && this.props.storeDtls.item)
        const data = this.props.storeDtls && this.props.storeDtls.item
        return (
            <div>
                <div className="StoreModalDiv">
                    <Modal show={this.props.show}
                        onHide={this.props.handleClose}
                        animation={false} size="lg"
                        backdrop="static"
                        className="StoreModal"
                    //  style={{ backgroundColor: '#00000005' }}
                    >
                        <Modal.Header style={{ fontSize: "35px" }} closeButton>
                            <Modal.Title>
                                <span style={{ fontSize: "20px" }}>
                                    Store Details View
                                </span>
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body style={{ height: "450px" }}>

                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <div className="storeNavdiv">
                                    <Nav variant="pills" style={{ paddingLeft: "25px", paddingRight: "25px" }}>
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Basic Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Details</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Action</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <Tab.Content style={{ border: 'none' }}>

                                    <Tab.Pane eventKey="first">
                                        <div className="storeModalTbl" >
                                            <Table responsive bordered>
                                                <tbody>
                                                    <tr>
                                                        <td>Name</td>
                                                        <td className="storeModalCap">{data !== undefined && data.name}</td>

                                                    </tr>

                                                    <tr>
                                                        <td>Address1</td>
                                                        <td className="storeModalCap">{data !== undefined && data.addr1}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Address2</td>
                                                        <td className="storeModalCap">{data !== undefined && data.addr2}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>City</td>
                                                        <td className="storeModalCap">{data !== undefined && data.city}</td>

                                                    </tr>

                                                    <tr>
                                                        <td>Email</td>
                                                        <td className="storeModalCap">{data !== undefined && data.email}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Website</td>
                                                        <td className="storeModalCap">{data !== undefined && data.website}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Zipcode</td>
                                                        <td className="storeModalCap">{data !== undefined && data.zip}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Mobile Number</td>
                                                        <td className="storeModalCap">{data !== undefined && data.mob}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Whatsapp Number</td>
                                                        <td className="storeModalCap">{data !== undefined && data.whatsappNo}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Secondary Number</td>
                                                        <td className="storeModalCap">{data !== undefined && data.scndryMobs}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Contact Person</td>
                                                        <td className="storeModalCap">{data !== undefined && data.cntctPersn}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Type</td>
                                                        <td className="storeModalCap">{data !== undefined && data.type}</td>

                                                    </tr>


                                                </tbody>
                                            </Table>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="storeModalTbl" >
                                            <Table responsive bordered>
                                                <tbody>
                                                    <tr>
                                                        <td>Distance</td>
                                                        <td className="storeModalCap">{data !== undefined && data.distance}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Catogory</td>
                                                        <td className="storeModalCap">{data !== undefined && data.ctgry}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Catogory Details</td>
                                                        <td className="storeModalCap">

                                                            {/* {data.map((item, i) => (
                        <div key={i}>
                          
                         {item.name}
                         </div>
                                                         ) )}
                          */}

                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td>Working Hours</td>
                                                        <td className="storeModalCap"></td>

                                                    </tr>
                                                    <tr>
                                                        <td>Holidays</td>
                                                        <td className="storeModalCap"></td>

                                                    </tr>
                                                    <tr>
                                                        <td>Landmark</td>
                                                        <td className="storeModalCap">{data !== undefined && data.landmark}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Image</td>
                                                        <td className="storeModalCap"></td>

                                                    </tr>
                                                    <tr>
                                                        <td>Images</td>
                                                        <td className="storeModalCap"></td>

                                                    </tr>
                                                    <tr>
                                                        <td>Subcatogory</td>
                                                        <td className="storeModalCap"></td>

                                                    </tr>
                                                    <tr>
                                                        <td>Subcatogory Details</td>
                                                        <td className="storeModalCap"></td>

                                                    </tr>
                                                    <tr>
                                                        <td>Description</td>
                                                        <td className="storeModalCap">{data !== undefined && data.desc}</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Created At</td>
                                                        <td className="storeModalCap">{data !== undefined && new Date(data.createdAt).toLocaleDateString()}</td>

                                                    </tr>


                                                </tbody>
                                            </Table>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div>
                                            <div>
                                                <h6 style={{ textAlign: "center",marginTop:"20px" }}><b>Are you sure you want to change the status?</b></h6>
                                            </div>
                                            <Row style={{ marginTop: "50px" }}>
                                                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                    <Button
                                                        className="storeActivBtn"
                                                        onClick={() =>
                                                            this.handleActiveView()
                                                        }
                                                    >
                                                        ACTIVE
                                                    </Button>
                                                    <StoreActiveModal
                                                        show={this.state.storeActiveShow}
                                                        handleClose={this.handleCloseView}

                                                    />
                                                </Col>
                                                {/* <Col xs={12} sm={12} md={4} lg={4}>
                                                </Col> */}
                                                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                    <Button
                                                        className="storeSuspndBtn"
                                                        onClick={() =>
                                                            this.handleSuspendView()
                                                        }
                                                    >
                                                        SUSPEND
                                                        </Button>
                                                    <StoreSuspendModal
                                                        show={this.state.storeSuspndShow}
                                                        handleClose={this.handleCloseSuspnd}

                                                    />
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
export default StoreViewModal;
