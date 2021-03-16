import React, { Component } from "react";
import { Card, Modal, InputGroup,Form ,FormControl,Pagination} from "react-bootstrap";
import { Progress, Table } from "reactstrap";
import Dog from "./Dog";

export default class DogsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      filterDog: null,
    };
  }

  handleClose = () => {
    this.setState({
      modalShow:false
    });
  };

  handleShow = (id) => {
    // const item=this.props.dogs.dog.filter(x=>{
    //   console.log(x)
    //   return x.id==id
    // })
    //console.log(id)
    const result = this.props.dogs.dog.filter(x => x.id == id);
    console.log("----",result)
    this.setState({
      modalShow:true,
      filterDog:result
    });
    console.log(this.state.filterDog)

  };




  render() {
    // console.log(this.props.dogs.dog)
    //console.log(this.handleShow)
    return (
      <div>
        <div className="userDiv">
          <Card>
            <Card.Header>
              <h3 style={{float:"left"}}>Dogs</h3>
              <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="ml-auto mr-sm-2" /> */}
      <InputGroup className="ml-auto mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text><i className="icon-magnifier"></i></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="inlineFormInputGroup" placeholder="Search" />
      </InputGroup>
    </Form>
            </Card.Header>
            <Card.Body>
              <Table
                hover
                responsive
                className="table-outline mb-0 d-none d-sm-table"
              >
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">
                      <i className="icon-picture"></i>
                    </th>
                    <th>Name</th>
                    <th>Life Span</th>
                    <th className="text-center">Breed Group</th>
                    <th className="text-center">Origin</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <Dog dog={this.props.dogs} modalShow={this.handleShow}/>
              </Table>

              {/* <Table
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
                     
                      </Table> */}




{/* <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination> */}

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
            <Modal.Title>{this.state.filterDog && this.state.filterDog[0].name }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           {this.state.filterDog && this.state.filterDog[0].name }
          </Modal.Body>
       
        </Modal>
      </div>
    );
  }
}
