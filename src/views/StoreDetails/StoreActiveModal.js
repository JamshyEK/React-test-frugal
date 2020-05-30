import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Tabs,
    Modal,
    Container
} from 'react-bootstrap'
import './StoreActiveModal.css'

class StoreActiveModal extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div>
            <div className="storeActvMdlDiv">
                <Modal 
                show={this.props.show} 
                onHide={this.props.handleClose} 
                animation={false}
                size="sm"
                className="storeActvMdl"
                >
               
                    <Modal.Body className="storeActvMdlBdy">
                        <h6><b>Are you sure you want to active?</b></h6>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button className="storeActvMdlCnclBtn" onClick={this.props.handleClose}>
                           CANCEL
                        </Button>
                        <Button  className="storeActvMdlActvBtn" onClick={this.props.handleClose}>
                           OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>
        )
    }
}
export default StoreActiveModal