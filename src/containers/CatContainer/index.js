import React, { Component } from "react";
import { connect } from "react-redux";
import CatList from "../../screens/Cats/CatsList";
import { loadingCats } from "../CatContainer/action";

class CatSection extends Component<Props, State> {
    
  componentDidMount() {
    this.props.addCats();
  }

  render() {
    return <CatList cats={this.props.cats} />;
  }
}

const mapStateToProps = (state) => ({
  cats: state.cats,
});
const mapDispatchToProps = (dispatch) => ({
  addCats: () => {
    dispatch(loadingCats());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatSection);
