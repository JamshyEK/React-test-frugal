import React, { Component } from 'react';
import { Table, Card } from 'react-bootstrap'
import './StoreDetails.css'
import StoreViewModal from '../StoreDetails/StoreViewModal'

class StoreDetails extends Component {

  constructor() {
    super()
    this.state = {
      storeData: [],
      storeShow: false,
    }
  }

  handleShowView = (item) => {
    this.setState({
      storeShow: true,
      storeDtls: item
    })
  }

  handleCloseView = () => {
    this.setState({ storeShow: false })
  }

  componentDidMount() {

    try {
      fetch("http://139.59.78.74:9400/api/v1/stores", {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',

        }
      })
        .then(response => response.json())
        .then(response => {
          console.log("--------------------res", response.rows)
          this.setState({
            storeData: response.rows
          })

        })
    }

    catch (err) {
      
    }


  }


  render() {
    return (
      <div>
        <div>
          <div>
            <div className="storeDiv">
              <Card>
                <Card.Header><h3>Store Details</h3></Card.Header>
                <Card.Body>
                  <Table
                    responsive
                    className="storeMainTable"
                    bordered
                  >
                    <thead >
                      <tr>
                        <th>Sl No</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>District</th>
                        <th>Mobile Number</th>
                        <th>Status</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      {this.state.storeData.map((item, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td className="storeCap">{item.type}</td>
                          <td className="storeCap">{item.name}</td>
                          <td className="storeCap">{item.dist}</td>
                          <td className="storeCap">{item.mob}</td>
                          <td className="storeCap">{item.status}</td>
                          <td className="storeViewIcon">
                            <i className="fa fa-eye fa-lg "
                              onClick={() =>
                                this.handleShowView({ item: item })
                              }></i>
                            <StoreViewModal
                                            show={this.state.storeShow}
                                            handleClose={this.handleCloseView}
                                            storeDtls={this.state.storeDtls}
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

export default StoreDetails;