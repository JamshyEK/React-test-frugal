import * as React from 'react'
import { connect } from 'react-redux'

import StoreDetails from '../../screens/StoreDetails/StoreDetails'
import { storeDetail } from './action'
class StoreContainer extends React.Component<Props, State>{
    render() {
        return <StoreDetails 
       
        storeList={this.props.storeList}
        />
    }
}
function bindAction(dispatch) {
    return {
        storeList: () => {
            console.log("Jaanu index work")
            dispatch(storeDetail())
        }
    }
}
const mapStateToProps = state => ({})

export default connect(mapStateToProps, bindAction)(StoreContainer)