import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Tabs,
    Modal,
    Container
} from 'react-bootstrap'
import './StoreSuspendModal.css'

class StoreSuspendModal extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div>
            <div className="storeSuspndMdlDiv">
                <Modal 
                show={this.props.show} 
                onHide={this.props.handleClose} 
                animation={false}
                size="sm"
                className="storeSuspndMdl"
                >
               
                    <Modal.Body className="storeSuspndMdlBdy">
                        <h6><b>Are you sure you want to suspend?</b></h6>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button className="storeSuspndCnclBtn" onClick={this.props.handleClose}>
                           CANCEL
                        </Button>
                        <Button  className="storeSuspndMdlBtn" onClick={this.props.handleClose}>
                           OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>
        )
    }
}
export default StoreSuspendModal