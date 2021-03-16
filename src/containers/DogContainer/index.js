import React, {Component} from 'react';
import {connect} from 'react-redux'
import DogList from '../../screens/Dogs/DogsList'
import {loadingDogs,addDogs} from '../DogContainer/action'


class DogSection extends Component<Props,State>{
    
 componentDidMount(){
this.props.addDogs()
}

    render(){
        return <DogList dogs={this.props.dogs}/>
    }
}

const mapStateToProps = state => ({
    dogs: state.dogs,
})

const mapDispatchToProps = dispatch => ({
    addDogs:()=>{
        dispatch(loadingDogs())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(DogSection) 