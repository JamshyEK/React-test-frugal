import React, { Component } from 'react'
import {  Card ,Modal} from 'react-bootstrap'
import {
  Table
} from 'reactstrap';
import Cat from './Cat'



export default class CatsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      filterCat: null,
    };
  }

  handleClose = () => {
    this.setState({
      modalShow:false
    });
  };

  handleShow = (id) => {

    const result = this.props.cats.cat.filter(x => x.id == id);
    console.log("----",result)
    this.setState({
      modalShow:true,
      filterCat:result
    });
 

  };

    render() {
        return (
            <div>
                <div className="userDiv">
                  <Card>
                    <Card.Header><h3>Cats</h3></Card.Header>
                    <Card.Body>
                    <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center"><i className="icon-picture"></i></th>
                      <th>Name</th>
                      <th>Life Span</th>
                      {/* <th className="text-center">Breed Group</th> */}
                      <th className="text-center">Origin</th>
                     <th>Action</th>
                    </tr>
                  </thead>
                  <Cat cat={this.props.cats} modalShow={this.handleShow}/>

                </Table>
                    </Card.Body>
                  </Card>
                </div>

                <Modal
           show={this.state.modalShow}
           onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.filterCat && this.state.filterCat[0].name }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           {this.state.filterCat && this.state.filterCat[0].name }
          </Modal.Body>
       
        </Modal>
              </div>
          
        )
    }
}
